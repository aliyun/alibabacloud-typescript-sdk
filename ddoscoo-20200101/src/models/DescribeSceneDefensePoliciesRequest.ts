// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneDefensePoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management.
   * 
   * If you do not configure this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: pending enabling
   * *   **2**: enabled
   * *   **3**: expired
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The type of the template that is used to create the policy. Valid values:
   * 
   * *   **promotion**: the Important Activity template
   * *   **bypass**: the Forward All template
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      status: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

