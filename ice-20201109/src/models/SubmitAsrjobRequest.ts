// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitASRJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job description. The maximum length is 128 bytes.
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
   * The audio speech-to-text configuration:
   * 
   * - HotwordLibraryIdList: the list of hotword library IDs. Currently, only one hotword library ID can be passed. Support for multiple hotword library IDs is planned for the future.
   * - SentenceMaxLength: the maximum length of each sentence in the output result. Type: int.
   * - EnableSemanticSentenceDetection: specifies whether to segment sentences in the output result based on semantics. Type: bool. Default value: false.
   * 
   * @example
   * {
   * 	"HotwordLibraryIdList": "******2609a14f54a0636b7e16******"
   * }
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configuration. OSS URLs and content library material IDs are supported.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
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
   * The job title. The maximum length is 128 bytes.
   * 
   * @example
   * Test title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings. You can pass in customer business information, such as the business environment and job information, in JSON string format.
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

