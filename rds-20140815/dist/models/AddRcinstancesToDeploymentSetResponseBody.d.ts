import * as $dara from '@darabonba/typescript';
/**
 */
export declare class AddRCInstancesToDeploymentSetResponseBodyResults extends $dara.Model {
    /**
     * @remarks
     * The node status. Valid values:
     * * **activation**: The node is running.
     * * **creating**: The node is being created.
     *
     * @example
     * completed
     */
    errorMessage?: string;
    /**
     * @remarks
     * The instance IDs.
     *
     * @example
     * rc-aaaa
     */
    RCInstanceId?: string;
    /**
     * @remarks
     * The node status. Valid values:
     * * **Success**: Successful.
     * * **Failed**: Failed.
     *
     * @example
     * Success
     */
    status?: string;
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
export declare class AddRCInstancesToDeploymentSetResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
     */
    requestId?: string;
    /**
     * @remarks
     * The inspection results.
     */
    results?: AddRCInstancesToDeploymentSetResponseBodyResults[];
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
