// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { KdtreeOption } from "./KdtreeOption";
import { Notification } from "./Notification";
import { OctreeOption } from "./OctreeOption";


export class CreateCompressPointCloudTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the compression algorithm. Valid values:
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
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The chained authorization configuration. This parameter is not required. For more information, see [Use chained authorization to access other entity resources](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The parameters for K-d tree compression.
   */
  kdtreeOption?: KdtreeOption;
  /**
   * @remarks
   * The notification configuration. For more information, click Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * > Intelligent Media Management API callbacks do not support specifying a webhook address. Use MNS instead.
   */
  notification?: Notification;
  /**
   * @remarks
   * The parameters for Octree compression.
   */
  octreeOption?: OctreeOption;
  /**
   * @remarks
   * The PCD property fields to compress and the compression order. After compression, the data is decompressed in this order.
   * 
   * - If you use Octree compression from the Point Cloud Library (PCL), only ["xyz"] is supported.
   * 
   * - If you use K-d tree compression from the Draco library, ["xyz"] or ["xyz", "intensity"] is supported.
   * 
   * This parameter is required.
   */
  pointCloudFields?: string[];
  /**
   * @remarks
   * The format of the point cloud file. Only the PCD format is supported. The default value is pcd.
   * 
   * @example
   * pcd
   */
  pointCloudFileFormat?: string;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
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
   * The URI must be in the format oss\\://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket in the same region as the project. ${Object} is the full path of the file, including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test/src/test.pcd
   */
  sourceURI?: string;
  /**
   * @remarks
   * Custom tags to search for and filter asynchronous tasks.
   * 
   * @example
   * {"LabelKey": "Value"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The OSS URI of the output file after compression.
   * 
   * The URI must be in the format oss\\://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket in the same region as the project. ${Object} is the full path of the file, including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test/tgt
   */
  targetURI?: string;
  /**
   * @remarks
   * Custom information that is returned in the asynchronous notification message. You can use this information to associate notification messages in your system. The maximum length is 2048 bytes.
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

