// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateResourceFileAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The code content of the file. The code format varies depending on the code type (fileType). You can locate a job of the corresponding type in the Operation Center, right-click it, and select View Code to check the specific code format.
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
   * The code type of the file.
   * 
   * Different file types correspond to different code types. For more information, see [DataWorks Node Types](https://help.aliyun.com/document_detail/600169.html).<br>
   * You can also invoke the [ListFileType](https://help.aliyun.com/document_detail/212428.html) API to query the code types of files.
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
   * The Alibaba Cloud User ID of the file owner. If this parameter is empty, the Alibaba Cloud User ID of the caller is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console, go to the workspace configuration page, and obtain the workspace ID. This parameter is required to identify the DataWorks workspace for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Indicates whether to synchronize and upload the resource to the compute engine.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  registerToCalcEngine?: boolean;
  /**
   * @remarks
   * The OSS URL for file upload provided by POP.
   * 
   * @example
   * http://bucketname1.oss-cn-shanghai.aliyuncs.com/example
   */
  resourceFileObject?: Readable;
  /**
   * @remarks
   * The Storage Path of the resource file on the compute engine. This field is currently used only by EMR and CDH. The EMR format is [osshdfs]://path/to/object, and for CDH, the default value must be /user/admin/lib.
   * 
   * @example
   * oss://oss-cn-shanghai.aliyuncs.com/emr-test
   */
  storageURL?: string;
  /**
   * @remarks
   * The upload mode for the resource file. This parameter currently applies only to File-type files in MaxCompute. Valid values:
   * 
   * - true: Downloadable resource mode.
   * 
   * - false: Online-editable text mode.
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

