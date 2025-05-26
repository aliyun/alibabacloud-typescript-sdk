// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompressPointCloudTaskShrinkRequest extends $dara.Model {
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
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The k-d tree compression options.
   */
  kdtreeOptionShrink?: string;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The octree compression options.
   */
  octreeOptionShrink?: string;
  /**
   * @remarks
   * The PCD property fields and the compression order in which the data is decompressed after the compression is complete.
   * 
   * *   If octree of Point Cloud Library (PCL) is used for compression, ["xyz"] is supported.
   * *   If Draco k-dimensional (k-d) tree is used for compression, ["xyz"] and ["xyz", "intensity"] are supported.
   * 
   * This parameter is required.
   */
  pointCloudFieldsShrink?: string;
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
  tagsShrink?: string;
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

