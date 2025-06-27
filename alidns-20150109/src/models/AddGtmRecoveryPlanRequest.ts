// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of faulty address pools.
   * 
   * This parameter is required.
   * 
   * @example
   * ["hra0or"]
   */
  faultAddrPool?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the disaster recovery plan.
   * 
   * This parameter is required.
   * 
   * @example
   * name-example
   */
  name?: string;
  /**
   * @remarks
   * The description of the disaster recovery plan.
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
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: 'string',
      lang: 'string',
      name: 'string',
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

