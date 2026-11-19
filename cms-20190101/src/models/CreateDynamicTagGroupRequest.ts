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
   * The resource tag value. Valid values of N: 1.
   * 
   * > You must specify both the `MatchExpress.N.TagValueMatchFunction` and `MatchExpress.N.TagValue` parameters.
   * 
   * @example
   * instance
   */
  tagValue?: string;
  /**
   * @remarks
   * The matching method for the resource tag value. Valid values of N: 1. Valid values:
   * - contains: Includes.
   * - startWith: Prefix.
   * - endWith: Suffix.
   * - notContains: Excludes.
   * - equals: Equals.
   * - all: All.
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
   * Ensures the idempotence of the request. You can generate a parameter value on your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * The alert contact groups. Valid values of N: 1 to 100. Alert notifications for the application group are sent to the alert contacts in the specified alert contact groups.
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
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: Sends a check request and does not create the queue. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the check fails, the system returns an error. If the check succeeds, the system returns the `DryRunOperation` error code.
   * - **false**: Sends a normal request and creates the queue after the check succeeds. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic installation of the CloudMonitor agent for the application group. CloudMonitor automatically installs the CloudMonitor agent on the hosts in the application group. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled. This is the default value.
   * 
   * @example
   * true
   */
  enableInstallAgent?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic subscription to event notifications for the application group. When critical or warning events occur on the resources in the application group, CloudMonitor sends alert notifications. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled. This is the default value.
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

