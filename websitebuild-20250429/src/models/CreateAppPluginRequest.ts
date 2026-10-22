// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the skill.
   * 
   * @example
   * {\\"Depth\\": 4, \\"ParentCategoryId\\": 5281, \\"Name\\": \\"1\\", \\"CategoryId\\": 5282, \\"CreateTime\\": \\"2025-08-26 10:20:37\\"}
   */
  category?: string;
  /**
   * @remarks
   * The description of the skill. The description must be 10 to 512 characters in length.
   * 
   * @example
   * 123
   */
  description?: string;
  /**
   * @remarks
   * The URL of the downloadable ZIP file. Specify either this parameter or OssKey.
   * 
   * @example
   * http://geoip-sdk-user.oss-cn-zhangjiakou.aliyuncs.com/product/v1/ipv6-inner/common/v1.20230608104522.dex?Expires=1753324652&OSSAccessKeyId=x6R87i97yKeKRggz&Signature=IwS6V56TlgjcX0AgikXLvf3CVtw%3D
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The extended JSON data. The format is the same as the extend parameter synchronized with the sandbox. If this parameter is not empty, it is saved to the database. This parameter is optional.
   * 
   * @example
   * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
   */
  extend?: string;
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * -1
   */
  icon?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) key generated after a direct upload from the frontend. Specify either this parameter or DownloadUrl.
   * 
   * @example
   * backend/detection/objects/r-0008ujvfksltf5j45n81/task-000hckiuwyau0gwn17vq.jpg
   */
  ossKey?: string;
  /**
   * @remarks
   * The unique identifier of the skill. The identifier must be 3 to 64 characters in length and can contain only lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  /**
   * @remarks
   * The name of the skill. The name must be 2 to 64 characters in length.
   * 
   * @example
   * alisecguard
   */
  pluginName?: string;
  /**
   * @remarks
   * The version number of the plug-in. The version number must be in the Semantic Versioning (SemVer) format. Default value: 0.1.0.
   * 
   * @example
   * 1.1.6
   */
  pluginVersion?: string;
  /**
   * @remarks
   * The tags of the skill. Separate multiple tags with commas (,).
   * 
   * @example
   * []
   */
  tags?: string;
  /**
   * @remarks
   * The visibility of the skill. Default value: private.
   * 
   * @example
   * private
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      extend: 'Extend',
      icon: 'Icon',
      ossKey: 'OssKey',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      pluginVersion: 'PluginVersion',
      tags: 'Tags',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      downloadUrl: 'string',
      extend: 'string',
      icon: 'string',
      ossKey: 'string',
      pluginId: 'string',
      pluginName: 'string',
      pluginVersion: 'string',
      tags: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

