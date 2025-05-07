// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindBatchAxgRequestAxgBindList extends $dara.Model {
  /**
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  ASRModelId?: string;
  /**
   * @example
   * true
   */
  ASRStatus?: boolean;
  /**
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  expectCity?: string;
  /**
   * @example
   * 2022-07-11 01:05:15
   */
  expiration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  groupId?: string;
  /**
   * @example
   * False
   */
  isRecordingEnabled?: boolean;
  /**
   * @example
   * 18223ad447910fd
   */
  outId?: string;
  /**
   * @example
   * 20220824021816883677
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13333333333
   */
  phoneNoA?: string;
  /**
   * @example
   * 13333333333
   */
  phoneNoB?: string;
  /**
   * @example
   * 13333333333
   */
  phoneNoX?: string;
  /**
   * @example
   * {\\"AXBRing_B\\":\\"100000002\\",\\"AXBRing_A\\":\\"100000001\\"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expectCity: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      ringConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

