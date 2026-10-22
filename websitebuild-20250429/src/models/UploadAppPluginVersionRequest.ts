// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAppPluginVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The changelog.
   * 
   * @example
   * x x x
   */
  changelog?: string;
  /**
   * @remarks
   * The description. This parameter is optional. If this parameter is not empty, the description field in the primary table is updated accordingly.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The downloadable URL of the ZIP file. This parameter and OssKey are mutually exclusive.
   * 
   * @example
   * https://sfile.chatglm.cn/chatglm4/file/a8/a87340a5ba.pdf
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The extended JSON string. This parameter is optional and must be in the same format as the extend parameter synchronized from the sandbox. If this parameter is not empty, the extend field in the primary table is updated accordingly.
   * 
   * @example
   * {"deliveryNodeName":"Delivery Quality Inspection","deliveryNodeStatus":"Finish","deliveryOperatorRole":"Provider"}
   */
  extend?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) key after the file is directly uploaded from the frontend. This parameter and DownloadUrl are mutually exclusive.
   * 
   * @example
   * backend/detection/objects/r-0008ujvfksltf5j45n81/task-000hckiuwyau0gwn17vq.jpg
   */
  ossKey?: string;
  /**
   * @remarks
   * The ID of the gateway plugin.
   * 
   * @example
   * aliplayer-react
   */
  pluginId?: string;
  /**
   * @remarks
   * The new version number. The version number must follow the Semantic Versioning (SemVer) specification and be greater than the current version.
   * 
   * @example
   * v2
   */
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changelog: 'Changelog',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      extend: 'Extend',
      ossKey: 'OssKey',
      pluginId: 'PluginId',
      pluginVersion: 'PluginVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelog: 'string',
      description: 'string',
      downloadUrl: 'string',
      extend: 'string',
      ossKey: 'string',
      pluginId: 'string',
      pluginVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

