// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrganizationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the organization.
   * 
   * @example
   * Organization description
   */
  description?: string;
  /**
   * @remarks
   * The time when the organization was created.
   * 
   * @example
   * 2025-12-11T02:19:27Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the organization was updated.
   * 
   * @example
   * 2025-07-08 13:59:11
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * Organization name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the product namespace.
   * 
   * @example
   * namespace-1
   */
  namespaceId?: string;
  /**
   * @remarks
   * The ID of the organization.
   * 
   * @example
   * org_123456789
   */
  orgId?: string;
  /**
   * @remarks
   * The business account identifier of the organization owner. For the ALIYUN type, the value is aliyunUid. For the SSO type, the value is userIdentifier.
   * 
   * @example
   * 1269388320468566
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
   * The status. Valid values:
   * 
   * - ACTIVE
   * - FROZEN
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

export class UpdateOrganizationResponseBody extends $dara.Model {
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
  data?: UpdateOrganizationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * None
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
   * The unique ID of the request.
   * 
   * @example
   * EC0B0D42-A88C-55F5-AF48-498B8207F6BC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - true: The call was successful.
   * - false: The call failed.
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
      data: UpdateOrganizationResponseBodyData,
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

