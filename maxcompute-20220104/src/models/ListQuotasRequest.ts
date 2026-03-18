// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * subscription
   */
  billingType?: string;
  /**
   * @remarks
   * The token that specifies the position from which to start returning results. The results are sorted in alphabetical order.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 100
   */
  maxItem?: number;
  /**
   * @deprecated
   */
  productId?: string;
  /**
   * @deprecated
   */
  region?: string;
  /**
   * @remarks
   * The cost allocation tags that are used to filter quotas. You can create cost allocation tags in the Tag service.
   * 
   * @example
   * {"tag":"this_is_tag_demo"}
   */
  saleTags?: string;
  /**
   * @deprecated
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'billingType',
      marker: 'marker',
      maxItem: 'maxItem',
      productId: 'productId',
      region: 'region',
      saleTags: 'saleTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      marker: 'string',
      maxItem: 'number',
      productId: 'string',
      region: 'string',
      saleTags: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

