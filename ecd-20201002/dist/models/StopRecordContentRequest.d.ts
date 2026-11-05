import * as $dara from '@darabonba/typescript';
export declare class StopRecordContentRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     */
    clientId?: string;
    clientOS?: string;
    clientVersion?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    desktopId?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    loginToken?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    sessionId?: string;
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
