// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationMembersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The member business ID.
   * 
   * @example
   * 112233
   */
  accountBizId?: string;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member account.
   * 
   * @example
   * test_001
   */
  accountName?: string;
  /**
   * @remarks
   * API Key ID
   * 
   * @example
   * key_123456789
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The email address of the member.
   * 
   * @example
   * test@email.com
   */
  email?: string;
  /**
   * @remarks
   * The time when the member joined.
   * 
   * @example
   * 2026-06-10T11:57:42.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The masked API key.
   * 
   * @example
   * prefix.abc****456
   */
  maskedApiKey?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org_123456789
   */
  orgId?: string;
  /**
   * @remarks
   * The list of member roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The ID used to allocate the seat resource.
   * 
   * @example
   * seat_123456
   */
  seatId?: string;
  /**
   * @remarks
   * The seat specification type. Valid values:
   * - standard: Standard seat.
   * - pro: Pro seat.
   * - max: Premium seat.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The member status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountBizId: 'AccountBizId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      apiKeyId: 'ApiKeyId',
      email: 'Email',
      gmtCreate: 'GmtCreate',
      maskedApiKey: 'MaskedApiKey',
      orgId: 'OrgId',
      roles: 'Roles',
      seatId: 'SeatId',
      specType: 'SpecType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBizId: 'string',
      accountId: 'string',
      accountName: 'string',
      apiKeyId: 'string',
      email: 'string',
      gmtCreate: 'string',
      maskedApiKey: 'string',
      orgId: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      seatId: 'string',
      specType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: ListOrganizationMembersResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 18
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListOrganizationMembersResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

