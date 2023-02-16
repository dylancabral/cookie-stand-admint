
import { hours, hourlySales, locations } from './data'
import React from 'react'

export default function ReportTable() {
    return (
        // props.cookieStands.length > 0 ? (
    <>
        <table className="w-1/2 mx-auto my-4 border border-black">
            <thead>
                <tr>
                    <th className="border border-black">Location</th>
                    {hours.map((hour) => {
                        return <th className="border border-black" key={hour.id}>{hour}</th>
                    })}
                    <th className="border border-black">Totals</th>
                </tr>
            </thead>
            <tbody>
                {locations.map((location, idx) => {
                    return <tr className="border border-black" key={idx}>
                        <td className="p-2 border border-black">{location}</td>
                        {hourlySales.map((hour, idx) => {
                            return <td className="border border-black" key={idx}>{hour}</td>
                        })}
                        <td className="p-2 border border-black">{hourlySales.reduce((sum, value) => sum + value, 0)}</td>
                    </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td className="p-2 border border-black">Totals</td>
                    {hours.map((hour, idx) => {
                        return <td key={idx}>{ }</td>
                    })}
                </tr>
            </tfoot>
        </table>
    </>
    
    // ): (
    //     <h1>No Cookie Stands Created Yet</h1>
    // )
    )
}


