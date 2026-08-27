// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRiskNotificationRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  isMute?: boolean;
  /**
   * @example
   * GW_VERSION_EXPIRED
   */
  riskCode?: string;
  static names(): { [key: string]: string } {
    return {
      isMute: 'isMute',
      riskCode: 'riskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMute: 'boolean',
      riskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

