// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupRequestRequest extends $dara.Model {
  /**
   * @example
   * Running
   * 
   * **if can be null:**
   * true
   */
  podStatus?: string;
  /**
   * @remarks
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

