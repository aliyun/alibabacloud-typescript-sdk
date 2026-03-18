// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   **ecs**: Elastic Compute Service (ECS).
   * *   **slb**: Server Load Balancer (SLB).
   * *   **eip**: Elastic IP Address (EIP).
   * *   **gf-eip**: EIP with Anti-DDoS (Enhanced) enabled.
   * 
   * >  This parameter is available only if Type is set to `default`.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policy.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
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

