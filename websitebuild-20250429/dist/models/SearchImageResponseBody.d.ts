import * as $dara from '@darabonba/typescript';
export declare class SearchImageResponseBodyImageResponseImageList extends $dara.Model {
    /**
     * @remarks
     * The descriptive tones recognized from the image.
     *
     * @example
     * Cool tone, blue
     */
    descriptiveTones?: string;
    /**
     * @remarks
     * The height of the image.
     *
     * @example
     * 1000
     */
    height?: number;
    /**
     * @remarks
     * The image category. Valid values:
     * - normal: Illustrations and article images.
     * - banner: Background images and carousel images.
     * - goods: Product or service images.
     *
     * @example
     * normal
     */
    imageCategory?: string;
    /**
     * @remarks
     * The aspect ratio.
     *
     * @example
     * 16:9
     */
    imageRatio?: string;
    /**
     * @remarks
     * The unique identifier of the image.
     *
     * @example
     * 70687446-821c-4ebd-9be6-b57dc0a3500a
     */
    imageUuid?: string;
    /**
     * @remarks
     * oss key
     *
     * @example
     * 1ad5/c728/cb40/2410/e01d/b24c/9acd/7d51/1ad5c728cb402410e01db24c9acd7d51
     */
    ossKey?: string;
    /**
     * @remarks
     * The quantitative palette extracted by the algorithm (HEX, LAB).
     *
     * @example
     * [{"hex": "#3a3f58", "rgb": {"r": 58, "g": 63, "b": 88 }, "lab": {"l": 27.81, "a": 2.95, "b": -16.52 }, "percentage": 0.4521 }, {"hex": "#c8a16a", "rgb": {"r": 200, "g": 161, "b": 106 }, "lab": {"l": 69.35, "a": 11.23, "b": 35.18 }, "percentage": 0.2355 }, {"hex": "#f1e8da", "rgb": {"r": 241, "g": 232, "b": 218 }, "lab": {"l": 93.17, "a": 1.76, "b": 7.91 }, "percentage": 0.1873 } ]
     */
    quantitativePalette?: string;
    /**
     * @remarks
     * The image tags.
     *
     * @example
     * Sunrise, running
     */
    tagsFromImage?: string;
    /**
     * @remarks
     * The temporary access URL of the image.
     *
     * @example
     * https://other-general-huadong1.oss-cn-hangzhou.aliyuncs.com/uploadWidget/RollTicket_01.jpeg
     */
    url?: string;
    /**
     * @remarks
     * The width of the image.
     *
     * @example
     * 154
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
export declare class SearchImageResponseBodyImageResponse extends $dara.Model {
    /**
     * @remarks
     * The image list.
     */
    imageList?: SearchImageResponseBodyImageResponseImageList[];
    /**
     * @remarks
     * The number of results returned per query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 3
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next query. This parameter is empty if no next query exists.
     *
     * @example
     * 2c6b65b6f9d625d4e2514a628bde8eb2e0b5e8707e68181f
     */
    nextToken?: string;
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
export declare class SearchImageResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code. If the request is successful, the ErrorCode parameter is not returned. If the request fails, the ErrorCode parameter is returned. For more information, see the error code list in this topic.
     *
     * @example
     * 0
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
     */
    errorMsg?: string;
    /**
     * @remarks
     * The image search results.
     */
    imageResponse?: SearchImageResponseBodyImageResponse;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     *
     * @example
     * true
     */
    success?: string;
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
