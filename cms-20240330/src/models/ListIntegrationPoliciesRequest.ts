// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPoliciesRequestTag extends $dara.Model {
  /**
   * @example
   * test
   */
  key?: string;
  /**
   * @example
   * value
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

export class ListIntegrationPoliciesRequest extends $dara.Model {
  /**
   * @example
   * cs-default
   */
  addonName?: string;
  bindResourceId?: string;
  /**
   * @example
   * eg-1,eg-2,eg-3
   */
  entityGroupIds?: string;
  /**
   * @example
   * cn-beijing,cn-hangzhou
   */
  filterRegionIds?: string;
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * mvnX6zqg3P
   */
  nextToken?: string;
  /**
   * @example
   * policy-93817a401f78435596d745a97d2e85a1
   */
  policyId?: string;
  /**
   * @example
   * prod-database
   */
  policyName?: string;
  /**
   * @example
   * CS
   */
  policyType?: string;
  prometheusInstanceId?: string;
  /**
   * @example
   * test
   */
  query?: string;
  /**
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  tag?: ListIntegrationPoliciesRequestTag[];
  /**
   * @example
   * demo
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      bindResourceId: 'bindResourceId',
      entityGroupIds: 'entityGroupIds',
      filterRegionIds: 'filterRegionIds',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      policyId: 'policyId',
      policyName: 'policyName',
      policyType: 'policyType',
      prometheusInstanceId: 'prometheusInstanceId',
      query: 'query',
      resourceGroupId: 'resourceGroupId',
      tag: 'tag',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      bindResourceId: 'string',
      entityGroupIds: 'string',
      filterRegionIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      prometheusInstanceId: 'string',
      query: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListIntegrationPoliciesRequestTag },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

