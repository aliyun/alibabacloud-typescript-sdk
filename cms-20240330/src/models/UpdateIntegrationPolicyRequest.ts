// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntegrationPolicyRequestTags extends $dara.Model {
  /**
   * @example
   * algo_bhv_expose_in_airec_exposure
   */
  key?: string;
  /**
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
   * @example
   * CS_Pro
   */
  feePackage?: string;
  /**
   * @example
   * metrics-inner-manage
   */
  policyName?: string;
  /**
   * @example
   * rg-aekzoiafjtr7zyq
   */
  resourceGroupId?: string;
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

