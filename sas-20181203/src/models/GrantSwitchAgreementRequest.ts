// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSwitchAgreementRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to agree to migrate the client connections from overseas servers to the Singapore center.
   * 
   * @example
   * true
   */
  isAgree?: boolean;
  /**
   * @remarks
   * Has the user confirmed the migration of Hong Kong region data to Singapore data center
   * 
   * - **true:** The user has confirmed that Hong Kong region data has been migrated to the Singapore data center. No notification popup needs to be displayed subsequently.
   * 
   * - **false**:The user has not confirmed that Hong Kong region data has been migrated to the Singapore data center. Notification popup still needs to be displayed subsequently.
   * 
   * @example
   * true
   */
  isConfirmed?: boolean;
  /**
   * @remarks
   * Whether to schedule the migration of data from the Hong Kong region to the Singapore data center within 24 hours. Values:
   * - **true**: Schedule the switch within 24 hours.
   * - **false**: Do not schedule. Users with cloud products in the Hong Kong region will be automatically migrated on March 5, 2026; users without cloud products in the Hong Kong region will be automatically migrated on November 17, 2025.
   * 
   * @example
   * true
   */
  isImmediate?: boolean;
  /**
   * @remarks
   * The language type for requests and responses. The default value is **zh**. Possible values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Switching type. Possible values:
   * 
   * - **sg_switch**: Migrate client connections from overseas servers to Singapore
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

