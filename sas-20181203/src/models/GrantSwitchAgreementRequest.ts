// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSwitchAgreementRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether you agree to the data migration from the Hong Kong (China) region to the Singapore data center. Valid values:
   * 
   * - **true**: Agree.
   * 
   * - **false**: Disagree.
   * 
   * @example
   * true
   */
  isAgree?: boolean;
  /**
   * @remarks
   * Specifies whether the user confirms that the data migration from the Hong Kong (China) region to the Singapore data center has been completed.
   * 
   * - **true**: Confirmed. The user has confirmed that the data migration from the Hong Kong (China) region to the Singapore data center has been completed, and the notification pop-up window no longer needs to be displayed.
   * - **false**: Not confirmed. The user has not confirmed that the data migration from the Hong Kong (China) region to the Singapore data center has been completed, and the notification pop-up window still needs to be displayed.
   */
  isConfirmed?: boolean;
  /**
   * @remarks
   * Specifies whether to schedule data migration of data from the Hong Kong (China) region to the Singapore data center within 24 hours. Valid values:
   * 
   * - **true**: Schedule the switch within 24 hours.
   * 
   * - **false**: Do not schedule. For users who have cloud services in the Hong Kong (China) region, data migration will be automatically completed on March 5, 2026. For users who do not have cloud services in the Hong Kong (China) region, data migration will be automatically completed on November 17, 2025.
   * 
   * @example
   * true
   */
  isImmediate?: boolean;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The switch type. Valid values:
   * 
   * - **sg_switch**: data migration from the Hong Kong (China) region to the Singapore data center.
   * 
   * @example
   * sg_switch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isAgree: 'IsAgree',
      isConfirmed: 'IsConfirmed',
      isImmediate: 'IsImmediate',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAgree: 'boolean',
      isConfirmed: 'boolean',
      isImmediate: 'boolean',
      lang: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

