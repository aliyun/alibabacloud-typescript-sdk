// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessConfigurationsResponseBodyAccessConfigurationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class ListAccessConfigurationsResponseBodyAccessConfigurations extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access configuration was created.
   * 
   * @example
   * 2021-11-02T08:44:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The initial access page.
   * 
   * The URL of the initial page that is displayed when a CloudSSO user uses the access configuration to access an account in a resource directory.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The session duration.
   * 
   * The maximum duration of a session when a CloudSSO user uses the access configuration to access an account in a resource directory.
   * 
   * Unit: seconds.
   * 
   * @example
   * 900
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The status notification information.
   */
  statusNotifications?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListAccessConfigurationsResponseBodyAccessConfigurationsTags[];
  /**
   * @remarks
   * The time when the access configuration was last modified.
   * 
   * @example
   * 2021-11-02T08:44:23Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
      statusNotifications: 'StatusNotifications',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      description: 'string',
      relayState: 'string',
      sessionDuration: 'number',
      statusNotifications: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListAccessConfigurationsResponseBodyAccessConfigurationsTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusNotifications)) {
      $dara.Model.validateArray(this.statusNotifications);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of access configurations.
   */
  accessConfigurations?: ListAccessConfigurationsResponseBodyAccessConfigurations[];
  /**
   * @remarks
   * Indicates whether the results are truncated. Valid values:
   * 
   * - true: The results are truncated.
   * - false: The results are not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * > This parameter is returned only when `IsTruncated` is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BC0CBAC-45E1-5BD3-BF6E-F69D1D5391C2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the request parameters.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurations: 'AccessConfigurations',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurations: { 'type': 'array', 'itemType': ListAccessConfigurationsResponseBodyAccessConfigurations },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessConfigurations)) {
      $dara.Model.validateArray(this.accessConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

