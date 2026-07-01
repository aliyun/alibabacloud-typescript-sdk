// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitScreenMediaHighlightsJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the editing configuration. For more information, see [EditingConfig Parameter Description](~~2863940#9b05519d46e0x~~).
   * 
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
   * @remarks
   * Specifies the input configuration. For more information, see [InputConfig Parameter Description](~~2863940#dda38bf6ec2pk~~).
   * 
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
   * @remarks
   * Specifies the output configuration. For more information, see [OutputConfig Parameter Description](~~2863940#4111a373d0xbz~~).
   * 
   * @example
   * {
   *   "MediaURL": "http://xxx.oss-cn-shanghai.aliyuncs.com/xxx_{index}.mp4",
   *   "Count": 1,
   *   "Width": 1080,
   *   "Height": 1920
   * }
   */
  outputConfig?: string;
  /**
   * @remarks
   * Specifies the user data and callback configuration. For details about the structure, see [UserData Configuration](https://help.aliyun.com/document_detail/357745.html).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"} or {"NotifyAddress":"https://xx.xx.xxx"} or {"NotifyAddress":"ice-callback-demo"}
   */
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

