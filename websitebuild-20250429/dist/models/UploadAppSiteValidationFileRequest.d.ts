import * as $dara from '@darabonba/typescript';
export declare class UploadAppSiteValidationFileRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * yjdw.bpu.edu.cn-waf
     */
    domain?: string;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * {\\"URI\\": \\"oss://imm-test-co-cn-chengdu/zqh/input/Image/indexImage/nn1.jpg\\", \\"LatLong\\":\\"+39.998800,+116.480900\\"}
     */
    file?: string;
    /**
     * @remarks
     * The file content.
     *
     * @example
     * abc
     */
    fileContent?: string;
    /**
     * @remarks
     * The file type.
     *
     * @example
     * APP_MAPPING
     */
    fileType?: string;
    /**
     * @remarks
     * The site host.
     *
     * @example
     * www.aliyun.com
     */
    siteHost?: string;
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
