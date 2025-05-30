// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushResourcePlanRequestMethodListDataList extends $dara.Model {
  classZone?: string;
  convertHostType?: string;
  logicZone?: string;
  netArch?: string;
  nic?: string;
  product3?: string;
  safeZone?: string;
  scenario?: string;
  supplyAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  supplyDate?: string;
  supplyType?: number;
  supplyVmAmount?: number;
  static names(): { [key: string]: string } {
    return {
      classZone: 'classZone',
      convertHostType: 'convertHostType',
      logicZone: 'logicZone',
      netArch: 'netArch',
      nic: 'nic',
      product3: 'product3',
      safeZone: 'safeZone',
      scenario: 'scenario',
      supplyAmount: 'supplyAmount',
      supplyDate: 'supplyDate',
      supplyType: 'supplyType',
      supplyVmAmount: 'supplyVmAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classZone: 'string',
      convertHostType: 'string',
      logicZone: 'string',
      netArch: 'string',
      nic: 'string',
      product3: 'string',
      safeZone: 'string',
      scenario: 'string',
      supplyAmount: 'number',
      supplyDate: 'string',
      supplyType: 'number',
      supplyVmAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

