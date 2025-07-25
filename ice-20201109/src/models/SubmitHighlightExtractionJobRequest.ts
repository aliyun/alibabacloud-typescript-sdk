// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHighlightExtractionJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure the idempotency of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The input configuration.
   * 
   * @example
   * {
   * 	"MediaArray": [{
   * 		"MediaId": "ceb72f00e****1ef8216e7e6c64a6302"
   * 	}, {
   * 		"MediaId": "ce450c40e****1ef8216e7e6c64a6302"
   * 	}, {
   * 		"MediaId": "ce49a020e****1ef81c1e6f6d5686302"
   * 	}, {
   * 		"MediaId": "d047e120e****1ef81c1e6f6d5686302"
   * 	}, {
   * 		"MediaId": "cfe2ddc0e****1ef81c1e6f6d5686302"
   * 	}],
   * 	"Strategy": {
   * 		"Count": 5,
   * 		"ClipDuration": 15
   * 	}
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output configuration.
   * 
   * @example
   * {
   * 	"NeedExport": true,
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
   * The user-defined data, including the business and callback configurations. For more information, see [UserData](~~357745#section-urj-v3f-0s1~~).
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      inputConfig: 'string',
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

