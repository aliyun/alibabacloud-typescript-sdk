// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { KdtreeOption } from "./KdtreeOption";
import { Notification } from "./Notification";
import { OctreeOption } from "./OctreeOption";


export class CreateCompressPointCloudTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The compression algorithm. Valid values:
   * 
   * - octree: octree
   * 
   * - kdtree: K-d tree
   * 
   * This parameter is required.
   * 
   * @example
   * octree
   */
  compressMethod?: string;
  /**
   * @remarks
   * **Leave this parameter empty unless you have special requirements.**
   * 
   * The China authorization configuration. This parameter is optional. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The K-d tree compression parameters.
   */
  kdtreeOption?: KdtreeOption;
  /**
   * @remarks
   * The message notification configuration. For more information, click Notification. For information about the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * > Intelligent Media Management does not support specifying a callback URL for API call callbacks. Use Message Service (MNS) instead.
   * >
   */
  notification?: Notification;
  /**
   * @remarks
   * The octree compression parameters.
   */
  octreeOption?: OctreeOption;
  /**
   * @remarks
   * The PCD attribute fields that participate in compression and the compression order. After compression, data is decompressed in this order.
   * 
   * - If you use PCL library octree compression, ["xyz"] is supported.
   * 
   * - If you use Draco library K-d tree compression, ["xyz"] or ["xyz", "intensity"] is supported.
   * 
   * This parameter is required.
   */
  pointCloudFields?: string[];
  /**
   * @remarks
   * The point cloud file format. Only PCD format is supported. Default value: pcd.
   * 
   * @example
   * pcd
   */
  pointCloudFileFormat?: string;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The OSS URI of the point cloud file.
   * 
   * The OSS URI follows the format oss://${Bucket}/${Object}, where `${Bucket}` is the name of an OSS bucket in the same region as the current project, and `${Object}` is the full path of the file including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test/src/test.pcd
   */
  sourceURI?: string;
  /**
   * @remarks
   * The custom tags that are used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"LabelKey": "Value"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The OSS URI of the compressed output file.
   * 
   * The OSS URI follows the format oss://${Bucket}/${Object}, where `${Bucket}` is the name of an OSS bucket in the same region as the current project, and `${Object}` is the full path of the file including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test/tgt
   */
  targetURI?: string;
  /**
   * @remarks
   * The custom information, which is returned in asynchronous message notifications to help you associate message notifications within your system. Maximum length: 2,048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      compressMethod: 'CompressMethod',
      credentialConfig: 'CredentialConfig',
      kdtreeOption: 'KdtreeOption',
      notification: 'Notification',
      octreeOption: 'OctreeOption',
      pointCloudFields: 'PointCloudFields',
      pointCloudFileFormat: 'PointCloudFileFormat',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      tags: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressMethod: 'string',
      credentialConfig: CredentialConfig,
      kdtreeOption: KdtreeOption,
      notification: Notification,
      octreeOption: OctreeOption,
      pointCloudFields: { 'type': 'array', 'itemType': 'string' },
      pointCloudFileFormat: 'string',
      projectName: 'string',
      sourceURI: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetURI: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.kdtreeOption && typeof (this.kdtreeOption as any).validate === 'function') {
      (this.kdtreeOption as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.octreeOption && typeof (this.octreeOption as any).validate === 'function') {
      (this.octreeOption as any).validate();
    }
    if(Array.isArray(this.pointCloudFields)) {
      $dara.Model.validateArray(this.pointCloudFields);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

