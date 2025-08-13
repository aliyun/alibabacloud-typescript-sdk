// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * Submitter ID.
   * 
   * This parameter is required.
   * 
   * @example
   * WB01160353
   */
  bucId?: string;
  /**
   * @remarks
   * Number of file rows.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  counts?: string;
  /**
   * @remarks
   * File MD5 value.
   * 
   * This parameter is required.
   * 
   * @example
   * VC6Sj3u138yfWHLxLl7dtA==
   */
  fileMD5?: string;
  /**
   * @remarks
   * File path.
   * 
   * This parameter is required.
   * 
   * @example
   * tempCache/ef2387dfb357ffe87925fd51d2b5305b/1665717035328/mockData.csv
   */
  filePath?: string;
  /**
   * @remarks
   * Model name.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * Model scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * saf_ai_account_abuse
   */
  modelScene?: string;
  /**
   * @remarks
   * Number of file columns.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  parameterNum?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Uploaded file name.
   * 
   * This parameter is required.
   * 
   * @example
   * fileTest
   */
  userLocalFileName?: string;
  static names(): { [key: string]: string } {
    return {
      bucId: 'BucId',
      counts: 'Counts',
      fileMD5: 'FileMD5',
      filePath: 'FilePath',
      modelName: 'ModelName',
      modelScene: 'ModelScene',
      parameterNum: 'ParameterNum',
      regId: 'RegId',
      userLocalFileName: 'UserLocalFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucId: 'string',
      counts: 'string',
      fileMD5: 'string',
      filePath: 'string',
      modelName: 'string',
      modelScene: 'string',
      parameterNum: 'string',
      regId: 'string',
      userLocalFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

