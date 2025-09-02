// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateResourceFileAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The code for the file. The code format varies based on the file type. To view the code format for a specific file type, go to Operation Center, right-click a node of the file type, and then select View Code.
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
   * File name
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the code for the file. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the type of the code for the file.
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
   * The Alibaba Cloud User ID of the file owner. If this parameter is empty, the caller\\"s Alibaba cloud user ID is used by default.
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
   * Whether to synchronously Upload resources to the computing engine.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  registerToCalcEngine?: boolean;
  /**
   * @remarks
   * The OSS URL for uploading files provided by POP.
   * 
   * @example
   * http://bucketname1.oss-cn-shanghai.aliyuncs.com/example
   */
  resourceFileObject?: Readable;
  /**
   * @remarks
   * The storage path of the resource file on the computing engine. Currently, only EMR and CDH use this field. EMR format is [oss | hdfs]:// path/to/object. CDH must be/user/admin/lib by default.
   * 
   * @example
   * oss://oss-cn-shanghai.aliyuncs.com/emr-test
   */
  storageURL?: string;
  /**
   * @remarks
   * File resource Upload mode. Currently, only files of the File type of MaxCompute are valid. The values are as follows:
   * 
   * - true: The Resource mode that can be downloaded.
   * - false: The text mode for online editing.
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

