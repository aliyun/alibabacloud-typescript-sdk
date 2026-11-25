import * as $dara from '@darabonba/typescript';
export declare class UploadAppPluginVersionRequest extends $dara.Model {
    /**
     * @remarks
     * The changelog.
     *
     * @example
     * Fixed an issue with reading plug-in configurations
     */
    changelog?: string;
    /**
     * @remarks
     * The description. This parameter is optional. If this parameter is not empty, the description in the main table is synchronously updated.
     *
     * @example
     * success
     */
    description?: string;
    /**
     * @remarks
     * The downloadable ZIP link. This parameter is mutually exclusive with OssKey.
     *
     * @example
     * https://sfile.chatglm.cn/chatglm4/file/a8/a87340a5ba.pdf
     */
    downloadUrl?: string;
    /**
     * @remarks
     * The extended JSON. This parameter is optional and uses the same format as the extend synchronized to the sandbox. If this parameter is not empty, the extend in the main table is synchronously updated.
     *
     * @example
     * {"deliveryNodeName":"Delivery quality inspection","deliveryNodeStatus":"Finish","deliveryOperatorRole":"Provider"}
     */
    extend?: string;
    /**
     * @remarks
     * The Object Storage Service (OSS) key after frontend direct upload. This parameter is mutually exclusive with DownloadUrl.
     *
     * @example
     * backend/detection/objects/r-0008ujvfksltf5j45n81/task-000hckiuwyau0gwn17vq.jpg
     */
    ossKey?: string;
    /**
     * @remarks
     * The ID of the gateway plug-in.
     *
     * @example
     * aliplayer-react
     */
    pluginId?: string;
    /**
     * @remarks
     * The new version number in SemVer format. The value must be greater than the current version.
     *
     * @example
     * v2
     */
    pluginVersion?: string;
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
