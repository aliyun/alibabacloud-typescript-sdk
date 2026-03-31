// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeResultResponseBodyModuleDetails extends $dara.Model {
  /**
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @example
   * 1080
   */
  seCu?: number;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      seCu: 'SeCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  moduleDetails?: DescribeChargeResultResponseBodyModuleDetails[];
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @example
   * 1080
   */
  totalSeCu?: number;
  static names(): { [key: string]: string } {
    return {
      moduleDetails: 'ModuleDetails',
      requestId: 'RequestId',
      totalSeCu: 'TotalSeCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetails: { 'type': 'array', 'itemType': DescribeChargeResultResponseBodyModuleDetails },
      requestId: 'string',
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

