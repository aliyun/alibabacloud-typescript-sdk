// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The applicable product type. Valid values:
   *  - **ecs**: queries the default policy applicable to ECS.
   * 
   * -  **slb**: queries the default policy applicable to SLB.
   * 
   * -  **eip**: queries the default policy applicable to EIP.
   * 
   *  - **gf-eip**: queries the default policy applicable to elastic IP addresses (EIPs) with Anti-DDoS Proxy Enabled.
   * 
   * > This parameter takes effect only when the policy type is `default`.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **default**: the default mitigation policy.
   * 
   * - **l3**: the IP-specific mitigation policy.
   * 
   * - **l4**: the port-specific mitigation policy.
   * 
   * @example
   * l3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productType: 'ProductType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

