// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckYikeAIAppJobRequest extends $dara.Model {
  /**
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @example
   * {\\"LoadImage.1.TargetImage\\":\\"MediaId1\\"}
   */
  appParams?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appParams: 'AppParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

