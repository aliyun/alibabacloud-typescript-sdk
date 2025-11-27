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
   * *   octree
   * *   kdtree
   * 
   * This parameter is required.
   * 
   * @example
   * octree
   */
  compressMethod?: string;
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The configurations of authorization chains. This parameter is optional. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The k-d tree compression options.
   */
  kdtreeOption?: KdtreeOption;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * >  The IMM operation does not support a callback URL. We recommend that you use Simple Message Queue (SMQ) to receive notifications.
   */
  notification?: Notification;
  /**
   * @remarks
   * The octree compression options.
   */
  octreeOption?: OctreeOption;
  /**
   * @remarks
   * The PCD property fields and the compression order in which the data is decompressed after the compression is complete.
   * 
   * *   If octree of Point Cloud Library (PCL) is used for compression, ["xyz"] is supported.
   * *   If Draco k-dimensional (k-d) tree is used for compression, ["xyz"] and ["xyz", "intensity"] are supported.
   * 
   * This parameter is required.
   */
  pointCloudFields?: string[];
  /**
   * @remarks
   * The file format. Set the value to the default value: pcd.
   * 
   * @example
   * pcd
   */
  pointCloudFileFormat?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The OSS URL of the PCD file.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test/src/test.pcd
   */
  sourceURI?: string;
  /**
   * @remarks
   * The custom tags, which can be used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"LabelKey": "Value"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The OSS URL of the output file after compression.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test/tgt
   */
  targetURI?: string;
  /**
   * @remarks
   * The custom data, which is returned in an asynchronous notification and facilitates notification management. The maximum length is 2,048 bytes.
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

