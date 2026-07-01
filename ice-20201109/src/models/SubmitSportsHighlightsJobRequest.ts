// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSportsHighlightsJobRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure request idempotency.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The input configuration. For more information, see [input configuration parameters](~~2843158#5cbc796a9cuu8~~).
   * 
   * @example
   * {
   *   "SportsCategory": "basketball",
   *   "InputMedia": "http://test-bucket.oss-cn-******.basketball-0707.mp4",
   *   "FaceRegister": [
   *     {
   *       "FaceUrls": ["http://testcdn.com/front.jpg", "http://testcdn.com/side.jpg"],
   *       "Name": "James"
   *     }
   *   ],
   *   "SlowMotionLogoRegister": {
   *       "SlowMotionLogoUrls": ["http://testcdn.com/logo1.jpg", "http://testcdn.com/logo2.jpg"]
   *   },
   *   "TransferNameRegister": [
   *     {
   *       "OriginalName": "IND",
   *       "TransferName": "印第安纳步行者"
   *     }
   *   ]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output configuration. For more information, see [output configuration parameters](~~2843158#b7dad99fe5q0r~~).
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
   * The user data, containing business and callback configurations. For more information about the structure, see [user data configuration](https://help.aliyun.com/document_detail/357745.html).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"} or {"NotifyAddress":"https://xx.xx.xxx"} or {"NotifyAddress":"ice-callback-demo"}
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

