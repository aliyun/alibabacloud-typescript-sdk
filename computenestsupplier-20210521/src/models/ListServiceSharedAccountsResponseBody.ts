// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceSharedAccountsResponseBodyShareAccount extends $dara.Model {
  /**
   * @remarks
   * The time when the sharing was created.
   * 
   * @example
   * 2021-12-28T02:47:46.000
   */
  createTime?: string;
  /**
   * @remarks
   * The logo of the distributor.
   * 
   * @example
   * logo
   */
  logo?: string;
  /**
   * @remarks
   * The name of the distributor.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The permission type. Valid values:
   * 
   * - Deployable: The service is deployable.
   * 
   * - Accessible: The service is accessible.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The time when the sharing was last updated.
   * 
   * @example
   * 2023-02-13T02:16:03.756Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * @example
   * 127383705xxxxxx
   */
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      logo: 'Logo',
      name: 'Name',
      permission: 'Permission',
      serviceId: 'ServiceId',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      logo: 'string',
      name: 'string',
      permission: 'string',
      serviceId: 'string',
      updateTime: 'string',
      userAliUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA3AE512-6D30-549A-B52D-B9042CA8D515
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the shared accounts.
   */
  shareAccount?: ListServiceSharedAccountsResponseBodyShareAccount[];
  /**
   * @remarks
   * The total number of entries that meet the filter criteria.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      shareAccount: 'ShareAccount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      shareAccount: { 'type': 'array', 'itemType': ListServiceSharedAccountsResponseBodyShareAccount },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shareAccount)) {
      $dara.Model.validateArray(this.shareAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

