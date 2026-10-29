// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDynamicTagGroupRequestMatchExpress extends $dara.Model {
  /**
   * @remarks
   * The tag key used to create the group. If multiple resources contain this key, the resources that meet the filter conditions are added to the same group based on the same key-value pair.
   * 
   * @example
   * appname
   */
  tagName?: string;
  /**
   * @remarks
   * The tag value of the resource. Valid values of N: 1.
   * 
   * > You must specify both the `MatchExpress.N.TagValueMatchFunction` and `MatchExpress.N.TagValue` parameters.
   * 
   * @example
   * instance
   */
  tagValue?: string;
  /**
   * @remarks
   * The matching method for the tag value of the resource. Valid values of N: 1. Valid values:
   * - contains: includes the specified value
   * - startWith: starts with the specified value
   * - endWith: ends with the specified value
   * - notContains: does not include the specified value
   * - equals: equals the specified value
   * - all: all values
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
   * - **true**: Performs a dry run without creating the application group. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false**: Performs a dry run and sends the actual request. If the request passes the dry run, the application group is created. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic installation of the CloudMonitor agent for the application group. CloudMonitor automatically installs the CloudMonitor agent on the hosts in the application group. Valid values:
   * 
   * - true: Enables automatic installation.
   * 
   * - false: Disables automatic installation. This is the default value.
   * 
   * @example
   * true
   */
  enableInstallAgent?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic subscription to event notifications for the application group. When critical or warning events occur on resources in the application group, CloudMonitor sends alert notifications. Valid values:
   * 
   * - true: Enables automatic subscription.
   * 
   * - false: Disables automatic subscription. This is the default value.
   * 
   * @example
   * true
   */
  enableSubscribeEvent?: boolean;
  /**
   * @remarks
   * The matching expression used to generate the application group based on tags.
   * 
   * This parameter is required.
   */
  matchExpress?: CreateDynamicTagGroupRequestMatchExpress[];
  /**
   * @remarks
   * The relationship between the conditional expressions of the resource tag values. Valid values:
   * 
   * - and: Uses the AND logical operator. This is the default value.
   * - or: Uses the OR logical operator.
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
   * The region ID of the tag.
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

