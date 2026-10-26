// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReviewRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The audit policy ID.
   * > You can invoke the ListReviewRules operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reviewRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      reviewRuleId: 'ReviewRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      reviewRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

