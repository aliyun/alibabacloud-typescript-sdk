import * as $dara from '@darabonba/typescript';
export declare class AppMaterialFile extends $dara.Model {
    /**
     * @remarks
     * The application instance ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The content type.
     *
     * @example
     * image/png
     */
    contentType?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2025-11-03 02:05:01
     */
    createTime?: string;
    /**
     * @remarks
     * The deletion time.
     *
     * @example
     * 2025-11-03 02:05:01
     */
    deletedTime?: string;
    /**
     * @remarks
     * The folder ID.
     *
     * @example
     * ddddwww
     */
    directoryId?: string;
    /**
     * @remarks
     * The file ID.
     *
     * @example
     * d75e1e9693cc460da218419d67735567
     */
    fileId?: string;
    /**
     * @remarks
     * The file URL.
     *
     * @example
     * https://demo-moshicloud-test.oss-cn-hangzhou-internal.aliyuncs.com/document/testcase/aliyun/api_case/pdf_angle90_page1.pdf
     */
    fileUrl?: string;
    /**
     * @remarks
     * The image height.
     *
     * @example
     * 1280
     */
    height?: number;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * 文件名
     */
    name?: string;
    /**
     * @remarks
     * The file status.
     *
     * @example
     * NORMAL
     */
    status?: string;
    /**
     * @remarks
     * The storage size.
     *
     * @example
     * 23M
     */
    storageSize?: string;
    /**
     * @remarks
     * The file name extension.
     *
     * @example
     * png
     */
    suffix?: string;
    /**
     * @remarks
     * The file type.
     *
     * @example
     * IMAGE
     */
    type?: string;
    /**
     * @remarks
     * The image width.
     *
     * @example
     * 1920
     */
    width?: number;
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
