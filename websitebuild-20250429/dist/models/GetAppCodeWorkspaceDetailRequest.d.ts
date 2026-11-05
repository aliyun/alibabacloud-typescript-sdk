import * as $dara from '@darabonba/typescript';
export declare class GetAppCodeWorkspaceDetailRequest extends $dara.Model {
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * 1071596645435968
     */
    siteId?: string;
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
