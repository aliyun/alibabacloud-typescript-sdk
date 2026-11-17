// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAiEngineEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The comment. The value can be up to 512 characters in length.
   * 
   * @example
   * testComment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * EVT-20261025109
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_des*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the WAF instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-de***
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The target status of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * handling
   */
  targetStatus?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      eventId: 'EventId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      targetStatus: 'TargetStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      eventId: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      targetStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

