// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDynamicTagGroupRequestMatchExpress extends $dara.Model {
  /**
   * @remarks
   * The keys of the tags that are used to create the application group. If a specified key is attached to multiple resources, the resources that have the same key-value pair are added to the same group.
   * 
   * @example
   * appname
   */
  tagName?: string;
  /**
   * @remarks
   * The tag values of the cloud resources. Set the value of N to 1.
   * 
   * >  If you set the `MatchExpress.N.TagValueMatchFunction` parameter, you must also set the `MatchExpress.N.TagValue` parameter.
   * 
   * @example
   * instance
   */
  tagValue?: string;
  /**
   * @remarks
   * The method that is used to match the tag values of the cloud resources. Set the value of N to 1. Valid values:
   * 
   * *   contains: contains
   * *   startWith: starts with a prefix
   * *   endWith: ends with a suffix
   * *   notContains: does not contain
   * *   equals: equals
   * *   all: matches all
   * 
   * >  If you set the `MatchExpress.N.TagValueMatchFunction` parameter, you must also set the `MatchExpress.N.TagValue` parameter.
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
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroupList?: string[];
  /**
   * @remarks
   * Specifies whether the CloudMonitor agent is automatically installed for the application group. CloudMonitor determines whether to automatically install the CloudMonitor agent for the hosts in an application group based on the value of this parameter. Valid values:
   * 
   * *   true: The CloudMonitor agent is automatically installed.
   * *   false (default value): The CloudMonitor agent is not automatically installed.
   * 
   * @example
   * true
   */
  enableInstallAgent?: boolean;
  /**
   * @remarks
   * Specifies whether the application group automatically subscribes to event notifications. If events whose severity level is critical or warning occur on resources in an application group, CloudMonitor sends alert notifications. Valid values:
   * 
   * *   true: The application group automatically subscribes to event notifications.
   * *   false (default value): The application group does not automatically subscribe to event notifications.
   * 
   * @example
   * true
   */
  enableSubscribeEvent?: boolean;
  /**
   * @remarks
   * The conditional expressions used to create an application group based on the tag.
   * 
   * This parameter is required.
   */
  matchExpress?: CreateDynamicTagGroupRequestMatchExpress[];
  /**
   * @remarks
   * The relationship between the conditional expressions for the tag values of the cloud resources. Valid values:
   * 
   * *   and (default)
   * *   or
   * 
   * @example
   * and
   */
  matchExpressFilterRelation?: string;
  regionId?: string;
  /**
   * @remarks
   * The tag keys of the cloud resources.
   * 
   * For more information about how to obtain tag keys, see [DescribeTagKeyList](https://help.aliyun.com/document_detail/145558.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs_instance
   */
  tagKey?: string;
  /**
   * @remarks
   * The ID of the region to which the tags belong.
   * 
   * @example
   * cn-hangzhou
   */
  tagRegionId?: string;
  /**
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

