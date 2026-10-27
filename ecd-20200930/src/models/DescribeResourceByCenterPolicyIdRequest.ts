// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceByCenterPolicyIdRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query.    
   * 
   * - Maximum value: 100.    
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l69tQX7yFxx6/4dbooBAOc
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * desktop
   */
  productType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ecd-ia2zw38bi6cm7****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      productType: 'ProductType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: 'string',
      productType: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

