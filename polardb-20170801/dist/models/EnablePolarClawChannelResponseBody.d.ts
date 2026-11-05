import * as $dara from '@darabonba/typescript';
export declare class EnablePolarClawChannelResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the enabled channel.
     *
     * @example
     * feishu
     */
    channelId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The message returned in the response.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation was successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the gateway was restarted.
     *
     * @example
     * true
     */
    restarted?: boolean;
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
