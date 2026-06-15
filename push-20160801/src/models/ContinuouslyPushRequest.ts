// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuouslyPushRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * Message ID.
   * 
   * Obtain this MessageId by calling the Push API with Target set to TBD. It represents a message already saved in the push system.
   * 
   * This parameter is required.
   * 
   * @example
   * 500131
   */
  messageId?: string;
  /**
   * @remarks
   * Push target:
   * 
   * - **DEVICE**: Push by device
   * 
   * - **ACCOUNT**: Push by account
   * 
   * - **ALIAS**: Push by alias
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
   * Specify values based on Target. Separate multiple values with commas. If you exceed the limit, split the push into multiple calls.
   * 
   * - Target=DEVICE: values such as `deviceid1,deviceid2` (up to 1,000 supported).
   * 
   * - Target=ACCOUNT: values such as `account1,account2` (up to 1,000 supported).
   * 
   * - Target=ALIAS: values such as `alias1,alias2` (up to 1,000 supported).
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

