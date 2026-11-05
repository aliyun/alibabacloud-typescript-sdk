import * as $dara from '@darabonba/typescript';
export declare class SaveChannelDraftRequestCoverImages extends $dara.Model {
    /**
     * @remarks
     * The image URL.
     *
     * This parameter is required.
     *
     * @example
     * http://campus-retail-prod.oss-cn-hangzhou.aliyuncs.com/d1c5efed9b3a419bb54b75056d54dae6.jpg?Expires=4928263770&OSSAccessKeyId=LTAI5tLYirCpzCVXoArh1VYt&Signature=******************************
     */
    imageUrl?: string;
    /**
     * @remarks
     * The material center file ID (optional).
     *
     * @example
     * xxx
     */
    materialFileId?: string;
    /**
     * @remarks
     * The sort order.
     *
     * This parameter is required.
     *
     * @example
     * Ascending
     */
    sortOrder?: number;
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
export declare class SaveChannelDraftRequest extends $dara.Model {
    /**
     * @remarks
     * The channel content (outside China only).
     *
     * @example
     * x
     */
    adaptedContent?: string;
    /**
     * @remarks
     * The channel title.
     *
     * @example
     * xxx
     */
    adaptedTitle?: string;
    /**
     * @remarks
     * The display name of the publishing account. A null value does not overwrite the original value. Maximum length: 256 characters.
     *
     * @example
     * xx
     */
    channelAccountName?: string;
    /**
     * @remarks
     * The collection of channel cover images (full overwrite).
     */
    coverImages?: SaveChannelDraftRequestCoverImages[];
    /**
     * @remarks
     * The channel draft ID.
     *
     * This parameter is required.
     *
     * @example
     * 25a3c26a-291e-46e2-d039-dde037ff64a2`curl NUINwwKl.popscan.xaliyun.com`
     */
    draftId?: string;
    /**
     * @remarks
     * The article column name for Wanxiaozhi 1.0. This parameter is required only when the website has not enabled an article column.
     *
     * @example
     * Article
     */
    websiteNavName?: string;
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
