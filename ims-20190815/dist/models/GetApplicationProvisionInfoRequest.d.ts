import * as $dara from '@darabonba/typescript';
export declare class GetApplicationProvisionInfoRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application. You can call ListApplicationProvisionInfos to obtain the AppId of an installed application.
     *
     * This parameter is required.
     *
     * @example
     * 452392483381546****
     */
    appId?: string;
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
