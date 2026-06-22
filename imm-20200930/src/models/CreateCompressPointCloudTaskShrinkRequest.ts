// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompressPointCloudTaskShrinkRequest extends $dara.Model {
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
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The parameters for K-d tree compression.
   */
  kdtreeOptionShrink?: string;
  /**
   * @remarks
   * The notification configuration. For more information, click Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * > Intelligent Media Management API callbacks do not support specifying a webhook address. Use MNS instead.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The parameters for Octree compression.
   */
  octreeOptionShrink?: string;
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
  pointCloudFieldsShrink?: string;
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
  tagsShrink?: string;
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
      credentialConfigShrink: 'CredentialConfig',
      kdtreeOptionShrink: 'KdtreeOption',
      notificationShrink: 'Notification',
      octreeOptionShrink: 'OctreeOption',
      pointCloudFieldsShrink: 'PointCloudFields',
      pointCloudFileFormat: 'PointCloudFileFormat',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      tagsShrink: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressMethod: 'string',
      credentialConfigShrink: 'string',
      kdtreeOptionShrink: 'string',
      notificationShrink: 'string',
      octreeOptionShrink: 'string',
      pointCloudFieldsShrink: 'string',
      pointCloudFileFormat: 'string',
      projectName: 'string',
      sourceURI: 'string',
      tagsShrink: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

