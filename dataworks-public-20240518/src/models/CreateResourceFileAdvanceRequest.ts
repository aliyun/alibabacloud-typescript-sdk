// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateResourceFileAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The code for the file. The code format varies based on the file type. To view the code format for a specific file type, go to Operation Center, open the directed acyclic graph (DAG) of a node of the file type, right-click the node, and then select View Code.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * This is a description
   */
  fileDescription?: string;
  /**
   * @remarks
   * The path of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * Business_process/First_Business_Process/MaxCompute/Folder_1/Folder_2
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * Filename
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the code for the file.
   * 
   * The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html). You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the type of the code for the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The name of the original resource file.
   * 
   * This parameter is required.
   * 
   * @example
   * origin_file_name.sql
   */
  originResourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the file owner. If this parameter is not configured, the ID of the Alibaba Cloud account of the user who calls the operation is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID. You must configure this parameter to specify the DataWorks workspace to which the operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies whether to upload the resource file to a desired compute engine.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  registerToCalcEngine?: boolean;
  /**
   * @remarks
   * The URL of the Object Storage Service (OSS) bucket to which you upload the file. The URL is provided by the POP platform.
   * 
   * @example
   * http://bucketname1.oss-cn-shanghai.aliyuncs.com/example
   */
  resourceFileObject?: Readable;
  /**
   * @remarks
   * The storage path of the resource file in a desired compute engine. This parameter takes effect only for E-MapReduce (EMR) and Cloudera\\"s Distribution including Apache Hadoop (CDH) compute engines. In an EMR compute engine, this parameter is configured in the [osshdfs]://path/to/object format. In a CDH compute engine, this parameter is set to /user/admin/lib by default.
   * 
   * @example
   * oss://oss-cn-shanghai.aliyuncs.com/emr-test
   */
  storageURL?: string;
  /**
   * @remarks
   * The upload mode of MaxCompute file resources. This parameter takes effect only for MaxCompute file resources. Valid values:
   * 
   * *   true: indicates the resource upload and download mode.
   * *   false: indicates the online editing mode.
   * 
   * @example
   * false
   */
  uploadMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileDescription: 'FileDescription',
      fileFolderPath: 'FileFolderPath',
      fileName: 'FileName',
      fileType: 'FileType',
      originResourceName: 'OriginResourceName',
      owner: 'Owner',
      projectId: 'ProjectId',
      registerToCalcEngine: 'RegisterToCalcEngine',
      resourceFileObject: 'ResourceFile',
      storageURL: 'StorageURL',
      uploadMode: 'UploadMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileDescription: 'string',
      fileFolderPath: 'string',
      fileName: 'string',
      fileType: 'number',
      originResourceName: 'string',
      owner: 'string',
      projectId: 'number',
      registerToCalcEngine: 'boolean',
      resourceFileObject: 'Readable',
      storageURL: 'string',
      uploadMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

