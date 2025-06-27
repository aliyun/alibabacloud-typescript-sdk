// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The list of faulty address pools.
   * 
   * @example
   * ["hra0or"]
   */
  faultAddrPool?: string;
  /**
   * @remarks
   * The language in which you want the values of some response parameters to be returned. These response parameters support multiple languages.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the disaster recovery plan.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the disaster recovery plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  recoveryPlanId?: number;
  /**
   * @remarks
   * The remarks about the disaster recovery plan.
   * 
   * @example
   * remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      faultAddrPool: 'FaultAddrPool',
      lang: 'Lang',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: 'string',
      lang: 'string',
      name: 'string',
      recoveryPlanId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

