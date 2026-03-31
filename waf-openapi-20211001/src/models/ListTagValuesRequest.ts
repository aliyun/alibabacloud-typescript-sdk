// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  Obtain the ID of the WAF instance by calling the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-lbj****x10g
   */
  instanceId?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * demoKey
   */
  key?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * This parameter is required.
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
   * rg-aekzwwk****cv5i
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to ALIYUN::WAF::DEFENSERESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      key: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
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

