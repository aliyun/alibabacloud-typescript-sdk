// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequestTags extends $dara.Model {
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

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * Format: `<Attribute> <Operator> <Value>`. This value is case-insensitive. Currently, `<Attribute>` supports only `UserName`, and `Operator` supports only `eq` (Equals) and `sw` (Start With).
   * 
   * Example: Filter = "UserName sw test" queries all users whose usernames start with test. Filter = "UserName eq testuser" queries the user whose username is `testuser`.
   * 
   * @example
   * UserName sw test
   */
  filter?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. You do not need to specify `NextToken` for the first API call.
   * 
   * When you call the API for the first time, if the total number of entries exceeds the `MaxResults` limit, the data is truncated and only `MaxResults` entries are returned. In this case, the response parameter `IsTruncated` is `true` and a `NextToken` is returned. You can use the `NextToken` returned from the previous call to continue calling the API while keeping other request parameters unchanged to query the truncated data. You can repeat this process until `IsTruncated` is `false`, which indicates that all data has been retrieved.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The user type. This parameter is used as a filter condition. Valid values:
   * 
   * - Manual: The user is manually created.
   * - Synchronized: The user is synchronized from an external identity provider.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The user status. This parameter is used as a filter condition. Valid values:
   * 
   * - Enabled: The user is enabled.
   * - Disabled: The user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListUsersRequestTags[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      provisionType: 'ProvisionType',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      provisionType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListUsersRequestTags },
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

