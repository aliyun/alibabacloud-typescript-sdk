// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntegrationPolicyRequestTags extends $dara.Model {
  /**
   * @remarks
   * Tag `key` value.
   * 
   * @example
   * algo_bhv_expose_in_airec_exposure
   */
  key?: string;
  /**
   * @remarks
   * Tag `value` value.
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
   * Fee package type, CS_Pro/CS_Basic/empty.
   * 
   * @example
   * CS_Pro
   */
  feePackage?: string;
  /**
   * @remarks
   * Rule name, minimum 3 characters, maximum 63 characters, must start with a letter.
   * 
   * @example
   * metrics-inner-manage
   */
  policyName?: string;
  /**
   * @remarks
   * Resource group ID of the instance.
   * 
   * @example
   * rg-aekzoiafjtr7zyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource tags.
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

