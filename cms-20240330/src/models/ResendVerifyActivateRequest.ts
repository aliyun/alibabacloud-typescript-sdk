// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResendVerifyActivateRequest extends $dara.Model {
  /**
   * @example
   * PHONE
   */
  channelType?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

