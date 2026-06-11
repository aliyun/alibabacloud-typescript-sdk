// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntegrationPolicyRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * algo_bhv_expose_in_airec_exposure
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * [{\\"Id\\": \\"kgqie6hm\\", \\"Name\\": \\"Sheet1\\"}]
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class UpdateIntegrationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the paid plan. Valid values: CS_Pro, CS_Basic, and empty.
   * 
   * @example
   * CS_Pro
   */
  feePackage?: string;
  /**
   * @remarks
   * The name of the rule. The name must be 3 to 63 characters in length and start with a letter.
   * 
   * @example
   * metrics-inner-manage
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzoiafjtr7zyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: UpdateIntegrationPolicyRequestTags[];
  static names(): { [key: string]: string } {
    return {
      feePackage: 'feePackage',
      policyName: 'policyName',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feePackage: 'string',
      policyName: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': UpdateIntegrationPolicyRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

