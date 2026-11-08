// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDynamicTagGroupRequestMatchExpress extends $dara.Model {
  /**
   * @remarks
   * The tag key used to create the group. If multiple resources contain this key, the matched resources are added to the same group based on the same key-value pair according to the filter conditions.
   * 
   * @example
   * appname
   */
  tagName?: string;
  /**
   * @remarks
   * The resource tag value. Valid values of N: 1.
   * 
   * > You must specify both MatchExpress.N.TagValueMatchFunction and MatchExpress.N.TagValue at the same time.
   * 
   * @example
   * instance
   */
  tagValue?: string;
  /**
   * @remarks
   * The matching method for the resource tag value. Valid values of N: 1. Valid values:
   * - contains: includes
   * - startWith: prefix
   * - endWith: suffix
   * - notContains: excludes
   * - equals: equals
   * - all: all
   * 
   * > You must specify both MatchExpress.N.TagValueMatchFunction and MatchExpress.N.TagValue at the same time.
   * 
   * @example
   * contains
   */
  tagValueMatchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagValue: 'TagValue',
      tagValueMatchFunction: 'TagValueMatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagValue: 'string',
      tagValueMatchFunction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * The alert contact groups. Valid values of N: 1 to 100. Alert notifications for the application group are sent to the alert contacts in the alert contact groups.
   * 
   * An alert contact group contains one or more alert contacts. For more information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html). For more information about how to query alert contact groups, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroupList?: string[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * - **true**: performs a dry run without creating the queue. The system checks whether required parameters are specified, the request format is valid, and business limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the error code DryRunOperation is returned.
   * - **false**: performs a dry run and creates the queue if the request passes the dry run. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic installation of the CloudMonitor agent for the application group. CloudMonitor automatically installs the CloudMonitor agent on the hosts in the application group. Valid values:
   * 
   * - true: enables automatic installation.
   * 
   * - false: disables automatic installation. This is the default value.
   * 
   * @example
   * true
   */
  enableInstallAgent?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic subscription to event notifications for the application group. When a critical or warning event occurs on a resource in the application group, CloudMonitor sends an alert notification. Valid values:
   * 
   * - true: enables automatic subscription.
   * 
   * - false: disables automatic subscription. This is the default value.
   * 
   * @example
   * true
   */
  enableSubscribeEvent?: boolean;
  /**
   * @remarks
   * The match expression used to generate the application group based on tags.
   * 
   * This parameter is required.
   */
  matchExpress?: CreateDynamicTagGroupRequestMatchExpress[];
  /**
   * @remarks
   * The relationship between the conditional expressions of the resource tag values. Valid values:
   * 
   * - and: AND. This is the default value.
   * - or: OR.
   * 
   * @example
   * and
   */
  matchExpressFilterRelation?: string;
  regionId?: string;
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * For more information about how to query the tag keys of resources, see [DescribeTagKeyList](https://help.aliyun.com/document_detail/145558.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs_instance
   */
  tagKey?: string;
  /**
   * @remarks
   * The region ID to which the tag belongs.
   * 
   * @example
   * cn-hangzhou
   */
  tagRegionId?: string;
  /**
   * @remarks
   * The IDs of the alert templates.
   * 
   * For more information about how to query the IDs of alert templates, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * @example
   * 85****
   */
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contactGroupList: 'ContactGroupList',
      dryRun: 'DryRun',
      enableInstallAgent: 'EnableInstallAgent',
      enableSubscribeEvent: 'EnableSubscribeEvent',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
      tagKey: 'TagKey',
      tagRegionId: 'TagRegionId',
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      enableInstallAgent: 'boolean',
      enableSubscribeEvent: 'boolean',
      matchExpress: { 'type': 'array', 'itemType': CreateDynamicTagGroupRequestMatchExpress },
      matchExpressFilterRelation: 'string',
      regionId: 'string',
      tagKey: 'string',
      tagRegionId: 'string',
      templateIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupList)) {
      $dara.Model.validateArray(this.contactGroupList);
    }
    if(Array.isArray(this.matchExpress)) {
      $dara.Model.validateArray(this.matchExpress);
    }
    if(Array.isArray(this.templateIdList)) {
      $dara.Model.validateArray(this.templateIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

