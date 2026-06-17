// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDynamicTagGroupRequestMatchExpress extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is used to create the group. If multiple resources have this tag key, the resources that meet the filter conditions are added to the same group based on the same key-value pair.
   * 
   * @example
   * appname
   */
  tagName?: string;
  /**
   * @remarks
   * The value of the resource tag. The value of N is 1.
   * 
   * > You must specify both the `MatchExpress.N.TagValueMatchFunction` and `MatchExpress.N.TagValue` parameters.
   * 
   * @example
   * instance
   */
  tagValue?: string;
  /**
   * @remarks
   * The method that is used to match the values of resource tags. The value of N is 1. Valid values:
   * 
   * - contains: includes.
   * 
   * - startWith: prefix.
   * 
   * - endWith: suffix.
   * 
   * - notContains: does not include.
   * 
   * - equals: equals.
   * 
   * - all: all.
   * 
   * > You must specify both the `MatchExpress.N.TagValueMatchFunction` and `MatchExpress.N.TagValue` parameters.
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
  /**
   * @remarks
   * The alert contact groups. The value of N can be from 1 to 100. Alert notifications for the application group are sent to the alert contacts in these alert contact groups.
   * 
   * An alert contact group can contain one or more alert contacts. For more information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html). For more information about how to obtain alert contact groups, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroupList?: string[];
  /**
   * @remarks
   * Specifies whether to automatically install the CloudMonitor agent for the application group. CloudMonitor automatically installs the agent on the hosts in the application group. Valid values:
   * 
   * - true: enabled.
   * 
   * - false (default): disabled.
   * 
   * @example
   * true
   */
  enableInstallAgent?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically subscribe to event notifications for the application group. When a critical or warning event occurs on a resource in the application group, CloudMonitor sends an alert notification. Valid values:
   * 
   * - true: enabled.
   * 
   * - false (default): disabled.
   * 
   * @example
   * true
   */
  enableSubscribeEvent?: boolean;
  /**
   * @remarks
   * The match expressions that are used to create an application group from tags.
   * 
   * This parameter is required.
   */
  matchExpress?: CreateDynamicTagGroupRequestMatchExpress[];
  /**
   * @remarks
   * The relationship between the conditional expressions for the tag values. Valid values:
   * 
   * - and (default)
   * 
   * - or
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
   * The ID of the region to which the tag belongs.
   * 
   * @example
   * cn-hangzhou
   */
  tagRegionId?: string;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * For more information about how to query the IDs of alert templates, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * @example
   * 85****
   */
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
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
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
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

