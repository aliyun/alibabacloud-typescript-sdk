// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Quota 配额的唯一标识。
   * 
   * This parameter is required.
   * 
   * @example
   * instanceTrialTimes。
   */
  quotaType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaType: 'QuotaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

