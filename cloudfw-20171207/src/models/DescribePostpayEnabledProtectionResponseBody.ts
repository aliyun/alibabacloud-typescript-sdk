// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayEnabledProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of days that protection has been disabled.
   * 
   * @example
   * 6
   */
  disabledDays?: number;
  /**
   * @remarks
   * The type of asset for which protection is disabled.
   * 
   * @example
   * nat
   */
  disabledType?: string;
  /**
   * @remarks
   * Indicates whether the protection feature is enabled.
   * 
   * @example
   * false
   */
  isEnabledProtection?: boolean;
  /**
   * @remarks
   * Indicates whether the protection feature is activated but currently disabled.
   * 
   * @example
   * false
   */
  isOpenButDisabled?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95CA5E2B-E5FB-5838-BC50-6A2C763C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disabledDays: 'DisabledDays',
      disabledType: 'DisabledType',
      isEnabledProtection: 'IsEnabledProtection',
      isOpenButDisabled: 'IsOpenButDisabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabledDays: 'number',
      disabledType: 'string',
      isEnabledProtection: 'boolean',
      isOpenButDisabled: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

