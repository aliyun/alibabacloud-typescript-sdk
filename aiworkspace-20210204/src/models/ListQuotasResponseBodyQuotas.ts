// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasResponseBodyQuotasSpecs } from "./ListQuotasResponseBodyQuotasSpecs";


export class ListQuotasResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * The alias of the quota.
   */
  displayName?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * 1828233
   */
  id?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   isolate: subscription
   * *   share: pay-as-you-go
   * 
   * @example
   * isolate
   */
  mode?: string;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * quota-name
   */
  name?: string;
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * *   PAI_isolate: CPU subscription resource groups of PAI
   * *   PAI_share: GPU pay-as-you-go resource groups of PAI
   * 
   * @example
   * MaxCompute_share
   */
  productCode?: string;
  /**
   * @remarks
   * The quota type. Valid value:
   * 
   * PAI: indicates GPU resource groups of MaxCompute.
   * 
   * @example
   * MaxCompute
   */
  quotaType?: string;
  /**
   * @remarks
   * The quota specifications.
   * 
   * @example
   * {\\"cu\\":\\"11500\\",\\"minCu\\":\\"2300\\",\\"parentId\\":\\"0\\"}
   */
  specs?: ListQuotasResponseBodyQuotasSpecs[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      mode: 'Mode',
      name: 'Name',
      productCode: 'ProductCode',
      quotaType: 'QuotaType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      mode: 'string',
      name: 'string',
      productCode: 'string',
      quotaType: 'string',
      specs: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotasSpecs },
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

