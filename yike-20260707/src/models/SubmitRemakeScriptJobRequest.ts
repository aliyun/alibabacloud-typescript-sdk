// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRemakeScriptJobRequest extends $dara.Model {
  /**
   * @example
   * {
   *     "ComprehensionResult": "http://xxxx.json",
   *     "Product":
   *     {
   *         "OriginalProductName": "xxxx",
   *         "NewProduct":
   *         {
   *             "ProductName": "xxxx",
   *             "Description": "xxxx",
   *             "ProductImages":
   *             [
   *                 "https://xxxx.png",
   *                 "https://xxxx.png",
   *                 "https://xxxx.png"
   *             ],
   *             "ProductKnowledge": "xxxx"
   *         }
   *     },
   *     "Avatar":
   *     {
   *         "NewAvatarImages":
   *         [
   *             "https://xxxx.png"
   *         ],
   *         "OriginalAvatarName": "xxxx"
   *     },
   *     "VoiceoverLanguage": "zh"
   * }
   */
  remakeParams?: string;
  /**
   * @example
   * faithful-remake
   */
  remakeType?: string;
  /**
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      remakeParams: 'RemakeParams',
      remakeType: 'RemakeType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remakeParams: 'string',
      remakeType: 'string',
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

