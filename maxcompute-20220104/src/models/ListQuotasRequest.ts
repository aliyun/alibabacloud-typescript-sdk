// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota.
   * 
   * @example
   * subscription
   */
  billingType?: string;
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
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
   * @remarks
   * The service ID.
   * 
   * @example
   * ODPS
   * 
   * @deprecated
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   * 
   * @deprecated
   */
  region?: string;
  /**
   * @remarks
   * The cost tag. You can filter out quota objects based on the cost tag. The cost tag is created when you tag a service.
   * 
   * @example
   * {"tag":"this_is_tag_demo"}
   */
  saleTags?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 280747109771520
   * 
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

