// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyConfigurationsResponseBodyEgressProxyConfigurationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 256 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListEgressProxyConfigurationsResponseBodyEgressProxyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The time when the egress proxy configuration was created. The time is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the egress proxy configuration. The description must be 2 to 256 characters in length, and can contain Chinese characters, letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * The ID of the egress proxy configuration.
   * 
   * @example
   * epc-gw80d16a969933e7****
   */
  egressProxyConfigurationId?: string;
  /**
   * @remarks
   * The name of the egress proxy configuration. The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * testEpg
   */
  egressProxyConfigurationName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek6jw4dpt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the egress proxy configuration. Valid values:
   * 
   * - **Provisioning**: The egress proxy configuration is being created.
   * 
   * - **Available**: The egress proxy configuration is available.
   * 
   * - **Configuring**: The specifications of the egress proxy configuration are being changed.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListEgressProxyConfigurationsResponseBodyEgressProxyConfigurationsTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyConfigurationName: 'EgressProxyConfigurationName',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      egressProxyConfigurationId: 'string',
      egressProxyConfigurationName: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListEgressProxyConfigurationsResponseBodyEgressProxyConfigurationsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEgressProxyConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of egress proxy configurations.
   */
  egressProxyConfigurations?: ListEgressProxyConfigurationsResponseBodyEgressProxyConfigurations[];
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If NextToken is empty, no next query is required.
   * - If NextToken is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A05ABD-A4C0-5F6B-A554-AEEEC73F9F70
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of egress proxy configurations that meet the query conditions.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyConfigurations: 'EgressProxyConfigurations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyConfigurations: { 'type': 'array', 'itemType': ListEgressProxyConfigurationsResponseBodyEgressProxyConfigurations },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyConfigurations)) {
      $dara.Model.validateArray(this.egressProxyConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

