import * as $dara from '@darabonba/typescript';
export declare class UploadMaterialFileForAdminRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the owner.
     *
     * @example
     * 123456
     */
    belongId?: string;
    /**
     * @remarks
     * The business instance ID.
     *
     * This parameter is required.
     *
     * @example
     * WS20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The file URL.
     *
     * This parameter is required.
     *
     * @example
     * http://docmind-api-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/4a7f_209934244261306272_14fd429b731245a79f291c64acf3ac77
     */
    fileUrl?: string;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * Video
     */
    name?: string;
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
