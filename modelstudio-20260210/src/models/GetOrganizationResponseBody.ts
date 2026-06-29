// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrganizationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The organization description.
   * 
   * @example
   * 组织描述
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-11-20T02:26:35Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-11-13T02:11:56Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * 组织名称
   */
  name?: string;
  /**
   * @remarks
   * The product namespace ID.
   * 
   * @example
   * namespace-1
   */
  namespaceId?: string;
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
   * The business account identifier of the organization owner. The value is aliyunUid for the ALIYUN type and userIdentifier for the SSO type.
   * 
   * @example
   * 1543686331379464
   */
  ownerBizAccountId?: string;
  /**
   * @remarks
   * The UAC account ID of the organization owner.
   * 
   * @example
   * acc_123456789
   */
  ownerId?: string;
  /**
   * @remarks
   * The status. Valid values: ACTIVE and FROZEN.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      namespaceId: 'NamespaceId',
      orgId: 'OrgId',
      ownerBizAccountId: 'OwnerBizAccountId',
      ownerId: 'OwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      namespaceId: 'string',
      orgId: 'string',
      ownerBizAccountId: 'string',
      ownerId: 'string',
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

export class GetOrganizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetOrganizationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * The unique request ID.
   * 
   * @example
   * 0CB5868D-C6E5-59A6-A20A-C39EB2E75BDE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOrganizationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

