// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuouslyPushRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The message ID.
   * 
   * The MessageId obtained after calling the Push operation and setting Target to TBD. It represents a message that has been saved to the push system.
   * 
   * This parameter is required.
   * 
   * @example
   * 500131
   */
  messageId?: string;
  /**
   * @remarks
   * The push target:
   * 
   * - **DEVICE**: Push based on devices.
   * - **ACCOUNT**: Push based on accounts.
   * - **ALIAS**: Push based on aliases.
   * 
   * Continuous push supports only these three target types.
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @remarks
   * Set this parameter based on Target. Separate multiple values with commas. If the limit is exceeded, push the message in multiple batches.
   * 
   * - If Target is set to DEVICE, the value is in the format of `deviceid1,deviceid2`. A maximum of 1,000 devices are supported.
   * - If Target is set to ACCOUNT, the value is in the format of `account1,account2`. A maximum of 1,000 accounts are supported.
   * - If Target is set to ALIAS, the value is in the format of `alias1,alias2`. A maximum of 1,000 aliases are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * a692961a92534047ad3625****
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
      target: 'Target',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'string',
      target: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

