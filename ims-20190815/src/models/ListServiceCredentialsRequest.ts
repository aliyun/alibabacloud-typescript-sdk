// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query service credentials for all Resource Access Management (RAM) users under the Alibaba Cloud account.
   * 
   * If this parameter is set to true, you cannot specify UserPrincipalName at the same time.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  allUsers?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   * 
   * **if can be null:**
   * false
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to specify this parameter for the first API call.
   * 
   * @example
   * EXAMPLE*******
   * 
   * **if can be null:**
   * false
   */
  nextToken?: string;
  /**
   * @remarks
   * The service name of the Alibaba Cloud service.
   * 
   * @example
   * xxx.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * Queries the service credentials of the specified RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      allUsers: 'AllUsers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serviceName: 'ServiceName',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allUsers: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      serviceName: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

