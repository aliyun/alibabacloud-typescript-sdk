// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessConfigurationsRequestTags extends $dara.Model {
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

export class ListAccessConfigurationsRequest extends $dara.Model {
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
   * Format: <Attribute> <Operator> <Value>. The filter is case-insensitive. Currently, <Attribute> supports only AccessConfigurationName, and <Operator> supports only eq (Equals) and sw (Start With).
   * 
   * Example: Filter = "AccessConfigurationName sw test" queries all access configurations whose names start with test. Filter = "AccessConfigurationName eq TestAccessConfiguration" queries the access configuration named TestAccessConfiguration.
   * 
   * @example
   * AccessConfigurationName sw test
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
   * When you call this API operation for the first time, if the total number of results exceeds the `MaxResults` limit, the results are truncated and only `MaxResults` entries are returned. In this case, the `IsTruncated` parameter is set to `true` and a `NextToken` is returned. You can use the `NextToken` returned from the previous call to continue calling this API operation while keeping other request parameters unchanged to query the truncated results. You can repeat this process until `IsTruncated` is `false`, which indicates that all data has been retrieved.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The status notification information, which is used as a filter condition for the query.
   * 
   * Valid values: ReprovisionRequired, which queries access configurations that need to be reprovisioned.
   * 
   * @example
   * ReprovisionRequired
   */
  statusNotifications?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListAccessConfigurationsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      statusNotifications: 'StatusNotifications',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      statusNotifications: 'string',
      tags: { 'type': 'array', 'itemType': ListAccessConfigurationsRequestTags },
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

