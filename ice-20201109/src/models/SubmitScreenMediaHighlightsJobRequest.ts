// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitScreenMediaHighlightsJobRequest extends $dara.Model {
  /**
   * @example
   * {
   * 	"MediaConfig": {
   * 		"Volume": 1
   * 	},
   * 	"ProcessConfig": {
   * 		"AllowTransition": true,
   * 		"TransitionList": ["fadecolor"]
   * 	}
   * }
   */
  editingConfig?: string;
  /**
   * @example
   * {
   * 	"MediaArray": [
   * 		"****9d46c886b45481030f6e****",
   * 		"****6c886b4549d481030f6e****"
   * 	]
   * }
   */
  inputConfig?: string;
  /**
   * @example
   * {
   *   "MediaURL": "http://xxx.oss-cn-shanghai.aliyuncs.com/xxx_{index}.mp4",
   *   "Count": 1,
   *   "Width": 1080,
   *   "Height": 1920
   * }
   */
  outputConfig?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: 'string',
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

