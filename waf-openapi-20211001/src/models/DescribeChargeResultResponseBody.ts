// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeResultResponseBodyModuleDetails extends $dara.Model {
  /**
   * @remarks
   * The number of Credits for the pricing module.
   * 
   * @example
   * 0
   */
  credit?: number;
  /**
   * @remarks
   * The pricing module identifier.
   * 
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @remarks
   * The number of SeCUs for the pricing module.
   * 
   * @example
   * 1080
   */
  seCu?: number;
  static names(): { [key: string]: string } {
    return {
      credit: 'Credit',
      moduleCode: 'ModuleCode',
      seCu: 'SeCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credit: 'number',
      moduleCode: 'string',
      seCu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChargeResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The calculation results.
   */
  moduleDetails?: DescribeChargeResultResponseBodyModuleDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of calculated Credits.
   * 
   * @example
   * 0
   */
  totalCredit?: number;
  /**
   * @remarks
   * The total number of calculated SeCUs.
   * 
   * @example
   * 1080
   */
  totalSeCu?: number;
  static names(): { [key: string]: string } {
    return {
      moduleDetails: 'ModuleDetails',
      requestId: 'RequestId',
      totalCredit: 'TotalCredit',
      totalSeCu: 'TotalSeCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetails: { 'type': 'array', 'itemType': DescribeChargeResultResponseBodyModuleDetails },
      requestId: 'string',
      totalCredit: 'number',
      totalSeCu: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.moduleDetails)) {
      $dara.Model.validateArray(this.moduleDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

