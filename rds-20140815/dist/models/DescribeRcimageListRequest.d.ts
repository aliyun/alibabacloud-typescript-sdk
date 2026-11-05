import * as $dara from '@darabonba/typescript';
export declare class DescribeRCImageListRequest extends $dara.Model {
    /**
     * @remarks
     * The system architecture of the image. Valid values:
     *
     * - x86_64
     * - arm64
     *
     * @example
     * x86_64
     */
    architecture?: string;
    /**
     * @remarks
     * The image ID.
     *
     * @example
     * m-2oqiu973jwcxe****
     */
    imageId?: string;
    /**
     * @remarks
     * The image name.
     *
     * @example
     * test_image_name
     */
    imageName?: string;
    /**
     * @remarks
     * The instance type for which to query available images.
     *
     * @example
     * mysql.x2.xlarge.6cm
     */
    instanceType?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The image type. Currently, only **self** is supported.
     *
     * @example
     * self
     */
    type?: string;
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
