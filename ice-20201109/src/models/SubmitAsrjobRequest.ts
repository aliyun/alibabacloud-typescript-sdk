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
   * The duration of the segment to transcribe.
   * 
   * @example
   * 00:00:10
   */
  duration?: string;
  /**
   * @remarks
   * The configuration for speech-to-text conversion:
   * 
   * - HotwordLibraryIdList: A list of custom vocabulary IDs. Only one custom vocabulary ID is currently supported. Future releases will support multiple IDs.
   * 
   * @example
   * {
   * 	"HotwordLibraryIdList": "******2609a14f54a0636b7e16******"
   * }
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configuration. Specify either an OSS URL or a media ID from the media library.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 or ****20b48fb04483915d4f2cd8ac****
   */
  inputFile?: string;
  /**
   * @remarks
   * The start time of the segment to be transcribed from the media file.
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
   * User-defined settings in JSON format. Use this to pass business-related data, such as the operating environment or other job details.
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

