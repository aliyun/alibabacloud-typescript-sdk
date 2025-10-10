// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclEntriesResponseBodyAclEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the ACL entry. The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * test-entry
   */
  description?: string;
  /**
   * @remarks
   * The CIDR block for the ACL entry.
   * 
   * @example
   * 10.0.1.1/24
   */
  entry?: string;
  /**
   * @remarks
   * The status of the ACL entry. Valid values:
   * 
   * *   **Adding**: The ACL entry is being added.
   * *   **Available**: The ACL entry is added and available.
   * *   **Removing**: The ACL entry is being removed.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL entries.
   */
  aclEntries?: ListAclEntriesResponseBodyAclEntries[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': ListAclEntriesResponseBodyAclEntries },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

