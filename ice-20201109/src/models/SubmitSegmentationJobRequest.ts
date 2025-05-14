// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSegmentationJobRequest extends $dara.Model {
  /**
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  inputConfig?: string;
  /**
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

