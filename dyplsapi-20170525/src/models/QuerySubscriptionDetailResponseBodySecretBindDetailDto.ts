// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySubscriptionDetailResponseBodySecretBindDetailDTO extends $dara.Model {
  /**
   * @remarks
   * The ID of the ASR model.
   * 
   * @example
   * 123456
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Indicates whether automatic speech recognition (ASR) is enabled. Valid values:
   * 
   * *   **false**: ASR is disabled.
   * *   **true**: ASR is enabled.
   * 
   * @example
   * true
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * The status of one-way call restrictions. No value is returned for this parameter if one-way call restrictions are not set. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * 
   * @example
   * CONTROL_BX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The expiration time of the binding.
   * 
   * @example
   * 2019-09-05 12:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * The extension in the AXG extension binding.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The creation time of the binding.
   * 
   * @example
   * 2019-03-05 12:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The ID of number group G in the binding.
   * 
   * @example
   * 2000000130001
   */
  groupId?: number;
  /**
   * @remarks
   * Indicates whether all calls made by the bound phone numbers are recorded. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  needRecord?: boolean;
  /**
   * @remarks
   * Phone number A in the binding.
   * 
   * @example
   * 13900001111
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the binding.
   * 
   * @example
   * 13900002222
   */
  phoneNoB?: string;
  /**
   * @remarks
   * The private number in the binding, that is, phone number X.
   * 
   * @example
   * 13900001234
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The binding status. Valid values:
   * 
   * *   **0**: The binding expired.
   * *   **1**: The binding is in effect.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 100000076879****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callRestrict: 'CallRestrict',
      expireDate: 'ExpireDate',
      extension: 'Extension',
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      needRecord: 'NeedRecord',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      status: 'Status',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callRestrict: 'string',
      expireDate: 'string',
      extension: 'string',
      gmtCreate: 'string',
      groupId: 'number',
      needRecord: 'boolean',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      status: 'number',
      subsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

