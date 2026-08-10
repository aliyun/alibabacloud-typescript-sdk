// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitASRJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task description. The description can be up to 128 bytes in length.
   * 
   * @example
   * Test description
   */
  description?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 00:00:10
   */
  duration?: string;
  /**
   * @remarks
   * The audio-to-text recognition configuration:
   * 
   * - HotwordLibraryIdList: the list of hotword library IDs. Currently, only one hotword library ID is supported. Support for multiple hotword library IDs is planned for the future.
   * - SentenceMaxLength: the maximum length of each sentence in the output. Type: int.
   * - EnableSemanticSentenceDetection: specifies whether to segment sentences based on semantics in the output. Type: bool. Default value: false.
   * 
   * @example
   * {
   * 	"HotwordLibraryIdList": "******2609a14f54a0636b7e16******"
   * }
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configuration. OSS addresses and content library material IDs are supported.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 或 ****20b48fb04483915d4f2cd8ac****
   */
  inputFile?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task title. The title can be up to 128 bytes in length.
   * 
   * @example
   * Test title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings. You can pass in business information such as the business environment and task information. The value is a JSON string.
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

