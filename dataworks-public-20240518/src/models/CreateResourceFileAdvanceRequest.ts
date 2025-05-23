// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateResourceFileAdvanceRequest extends $dara.Model {
  /**
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @example
   * This is a description
   */
  fileDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Business_process/First_Business_Process/MaxCompute/Folder_1/Folder_2
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Filename
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * origin_file_name.sql
   */
  originResourceName?: string;
  /**
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  registerToCalcEngine?: boolean;
  /**
   * @example
   * http://bucketname1.oss-cn-shanghai.aliyuncs.com/example
   */
  resourceFileObject?: Readable;
  /**
   * @example
   * oss://oss-cn-shanghai.aliyuncs.com/emr-test
   */
  storageURL?: string;
  /**
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

