// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSegmentationJobRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure request idempotence.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The input configuration. For more information, see [InputConfig](~~2874121#cc59ad3082jbx~~).
   * 
   * @example
   * {
   * "Type": "OSS",
   * "Media": "http://test-bucket.oss-cn-shanghai.aliyuncs.com/test.mp4"
   * }
   * or {
   * "Type": "Media",
   * "Media": "ce49a020e****1ef81c1e6f6d5686302"
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The job parameters. For more information, see [JobParams](~~2874121#a60357f2d5iix~~).
   * 
   * @example
   * {
   * 	"Mode": "UserDefined",
   * 	"Ranges": [{
   * 		"In": 10,
   * 		"Out": 20
   * 	}, {
   * 		"In": 35,
   * 		"Out": 50
   * 	}]
   * }
   */
  jobParams?: string;
  /**
   * @remarks
   * The output configuration. For more information, see [OutputConfig](~~2874121#cef23186a8d6w~~).
   * 
   * @example
   * {
   * 	"OutputMediaTarget": "oss-object",
   * 	"Bucket": "test-bucket",
   * 	"ObjectKey": "path/to/test_{index}.mp4",
   * 	"Width": 1920,
   * 	"Height": 1080,
   * 	"ExportAsNewMedia": false
   * }
   */
  outputConfig?: string;
  /**
   * @remarks
   * Custom user data in JSON format, with a maximum length of 512 bytes.
   * 
   * @example
   * {"test": "22"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      inputConfig: 'InputConfig',
      jobParams: 'JobParams',
      outputConfig: 'OutputConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      inputConfig: 'string',
      jobParams: 'string',
      outputConfig: 'string',
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

