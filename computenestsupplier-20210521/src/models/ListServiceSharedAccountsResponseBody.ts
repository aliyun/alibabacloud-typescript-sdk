// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceSharedAccountsResponseBodyShareAccount extends $dara.Model {
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2021-12-28T02:47:46.000
   */
  createTime?: string;
  /**
   * @remarks
   * Service logo.
   * 
   * @example
   * logo
   */
  logo?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
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
   * The time when the service was updated.
   * 
   * @example
   * 2023-02-13T02:16:03.756Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user aliUid.
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
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
   * Service shared account information.
   */
  shareAccount?: ListServiceSharedAccountsResponseBodyShareAccount[];
  /**
   * @remarks
   * The total number of entries returned.
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

