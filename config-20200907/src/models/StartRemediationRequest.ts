// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-8a973ac2e2be00a2****
   */
  configRuleId?: string;
  /**
   * @example
   * vpc-xxx
   */
  resourceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * ACS::VPC::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

