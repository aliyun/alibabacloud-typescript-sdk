// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitASRJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job description, which can up to 128 bytes in length.
   * 
   * @example
   * 测试描述
   */
  description?: string;
  /**
   * @remarks
   * The speech duration.
   * 
   * @example
   * 00:00:10
   */
  duration?: string;
  editingConfig?: string;
  /**
   * @remarks
   * The input file. You can specify an Object Storage Service (OSS) URL or the ID of a media asset in the media asset library.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 或 ****20b48fb04483915d4f2cd8ac****
   */
  inputFile?: string;
  /**
   * @remarks
   * The start time of the speech to recognize.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The job title, which can be up to 128 bytes in length.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format. You can specify your business information, such as the business environment and job information.
   * 
   * @example
   * {
   *       "user": "data",
   *       "env": "prod"
   * }
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      duration: 'Duration',
      editingConfig: 'EditingConfig',
      inputFile: 'InputFile',
      startTime: 'StartTime',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      duration: 'string',
      editingConfig: 'string',
      inputFile: 'string',
      startTime: 'string',
      title: 'string',
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

