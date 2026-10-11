// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyConfigurationsRequestTag extends $dara.Model {
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

export class ListEgressProxyConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of egress proxy configuration IDs.
   */
  egressProxyConfigurationIds?: string[];
  /**
   * @remarks
   * The list of egress proxy configuration names.
   */
  egressProxyConfigurationNames?: string[];
  /**
   * @remarks
   * The maximum number of entries to return per page during paging in a paged query. Valid values: 0 to 1000. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - Leave this parameter empty for the first query or when no next query is required.
   * - If a next query is required, set this parameter to the value of NextToken returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4jcyx5e****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries to skip during paging in a paged query. The value must be greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 0
   */
  skip?: number;
  /**
   * @remarks
   * Filters egress proxy configurations by status. Valid values:
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
  tag?: ListEgressProxyConfigurationsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      egressProxyConfigurationIds: 'EgressProxyConfigurationIds',
      egressProxyConfigurationNames: 'EgressProxyConfigurationNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      skip: 'Skip',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyConfigurationIds: { 'type': 'array', 'itemType': 'string' },
      egressProxyConfigurationNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      skip: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListEgressProxyConfigurationsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyConfigurationIds)) {
      $dara.Model.validateArray(this.egressProxyConfigurationIds);
    }
    if(Array.isArray(this.egressProxyConfigurationNames)) {
      $dara.Model.validateArray(this.egressProxyConfigurationNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

