// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskNotificationRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the risk item, such as the code for version risk or capacity risk.
   * 
   * This parameter is required.
   * 
   * @example
   * GW_VERSION_EXPIRED
   */
  riskCode?: string;
  static names(): { [key: string]: string } {
    return {
      riskCode: 'riskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

