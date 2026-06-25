// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyQuotasSpecs extends $dara.Model {
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * cu
   */
  name?: string;
  /**
   * @remarks
   * The type. This parameter can be empty.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The specification value.
   * 
   * @example
   * 11500
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * The alias of the resource quota.
   * 
   * @example
   * 默认Quota。
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
   * - isolate: subscription.
   * 
   * - share: pay-as-you-go.
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
   * The product name. Valid values:
   * 
   * - PAI_isolate: a subscription PAI resource group (PAI CPU).
   * 
   * - PAI_share: a pay-as-you-go PAI resource group (PAI GPU).
   * 
   * @example
   * PAI_share
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the resource quota. Valid value:
   * 
   * PAI: a GPU resource group cluster of MaxCompute.
   * 
   * @example
   * PAI
   */
  quotaType?: string;
  /**
   * @remarks
   * The list of specification descriptions.
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

export class ListQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resource quotas.
   */
  quotas?: ListQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of resource quotas that meet the filter condition.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotas },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

