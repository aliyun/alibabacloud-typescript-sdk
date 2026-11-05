import * as $dara from '@darabonba/typescript';
export declare class GetConnectionTicketResponseBody extends $dara.Model {
    /**
     * @example
     * ecd-1234567890abcdefg
     */
    desktopId?: string;
    p2PToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
     */
    requestId?: string;
    /**
     * @remarks
     * The ticket used to connect to the user instance. Before you use the ticket, you must decode its content by using Base64, save the decoded content as an .ica file (for example, xxx.ica), and then open the file. Python code example:
     *
     * ```
     * import base64
     * response = {
     *     "Ticket": "W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********",
     *     "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
     * }
     * f = open (\\"xxx.ica\\", \\"w\\")
     * out = base64.b64decode(response[\\"Ticket\\"])
     * f.write(out)
     * f.close()
     * ```
     *
     * @example
     * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
     */
    taskCode?: string;
    /**
     * @remarks
     * The ID of the cloud desktop connection task.
     *
     * @example
     * 2afbad19-778a-4fc5-9674-1f19c63862da
     */
    taskId?: string;
    /**
     * @remarks
     * The ID of the cloud desktop connection task.
     *
     * @example
     * 2afbad19-778a-4fc5-9674-1f19c638****
     */
    taskMessage?: string;
    /**
     * @remarks
     * The task status.
     *
     * @example
     * FINISHED
     */
    taskStatus?: string;
    /**
     * @remarks
     * The connection credentials for the cloud desktop.
     *
     * @example
     * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
     */
    ticket?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
