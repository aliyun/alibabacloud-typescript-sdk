// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourcesResponseBodyResourcesQuotasSpecs } from "./ListResourcesResponseBodyResourcesQuotasSpecs";


export class ListResourcesResponseBodyResourcesQuotas extends $dara.Model {
  /**
   * @remarks
   * The resource group type. Valid values:
   * 
   * *   CPU
   * *   GPU
   * 
   * @example
   * cpu
   */
  cardType?: string;
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
   * 123
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
   * develop
   */
  mode?: string;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * QuotaName
   */
  name?: string;
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * *   PAI_isolate: CPU subscription resource groups of PAI
   * *   PAI_share: GPU pay-as-you-go resource groups of PAI
   * *   MaxCompute_share: pay-as-you-go resource groups of MaxCompute
   * *   MaxCompute_isolate: subscription resource groups of MaxCompute
   * *   DataWorks_isolate: subscription resource groups of DataWorks
   * *   DataWorks_share: pay-as-you-go resource groups of DataWorks
   * *   DLC_share: pay-as-you-go resource groups of Deep Learning Containers (DLC)
   * 
   * @example
   * MaxCompute_isolate
   */
  productCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   PAI
   * *   MaxCompute
   * *   DLC
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
  specs?: ListResourcesResponseBodyResourcesQuotasSpecs[];
  static names(): { [key: string]: string } {
    return {
      cardType: 'CardType',
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
      cardType: 'string',
      displayName: 'string',
      id: 'string',
      mode: 'string',
      name: 'string',
      productCode: 'string',
      quotaType: 'string',
      specs: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesQuotasSpecs },
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

