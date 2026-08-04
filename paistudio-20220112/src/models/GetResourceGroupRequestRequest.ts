// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The container status. Valid values:
   * 
   * - Waiting
   * - Running
   * - Terminated
   * 
   * @example
   * Running
   * 
   * **if can be null:**
   * true
   */
  podStatus?: string;
  /**
   * @remarks
   * The resource group ID. Each resource group has a globally unique resource group ID. You can use the resource group ID to obtain information about the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      podStatus: 'PodStatus',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podStatus: 'string',
      resourceGroupID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

