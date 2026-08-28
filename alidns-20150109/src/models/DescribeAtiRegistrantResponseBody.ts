// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiRegistrantResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * RemoveRspDomainServerHoldStatusForGatewayOte
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization principal.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authorization principal.
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encrypted complete diagnostic message.
   * 
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason for the authentication failure. Valid values:
   * - ExplicitDeny: explicit deny.
   * - ImplicitDeny: implicit deny.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiRegistrantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: DescribeAtiRegistrantResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The country.
   * 
   * @example
   * China
   */
  cc?: string;
  /**
   * @remarks
   * The city. Default value: Hangzhou.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The creation time (UNIX timestamp).
   * 
   * @example
   * 1533773400000
   */
  createTimestamp?: string;
  /**
   * @remarks
   * The document number of the registrant. The number can be up to 50 characters in length.
   * 
   * @example
   * 110123456789122341
   */
  documentCode?: string;
  /**
   * @remarks
   * The document type of the registrant. For more information, see the appendix on document types.
   * 
   * @example
   * SFZ
   */
  documentType?: string;
  /**
   * @remarks
   * The email address. The address can be up to 300 characters in length.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the registrant. The name can be up to 255 characters in length.
   * 
   * @example
   * Zhang xx
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the registrant. The number can be up to 128 characters in length. If the country is China and the number is not a mobile phone number, the area code must match the city.
   * 
   * @example
   * 13112345678
   */
  phone?: string;
  /**
   * @remarks
   * The ID of the real-name verified registrant.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  /**
   * @remarks
   * The reason why the real-name verification was rejected.
   * 
   * @example
   * Subject to the actual response
   */
  rejectReason?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  /**
   * @remarks
   * The state or province.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The real-name verification status. Valid values:
   * 
   * - Approved.
   * - Under review.
   * - Rejected.
   * 
   * @example
   * Approved
   */
  status?: string;
  /**
   * @remarks
   * The street address.
   * 
   * @example
   * xx District, xx Street
   */
  street?: string;
  /**
   * @remarks
   * The update time (UNIX timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      cc: 'Cc',
      city: 'City',
      createTimestamp: 'CreateTimestamp',
      documentCode: 'DocumentCode',
      documentType: 'DocumentType',
      email: 'Email',
      name: 'Name',
      phone: 'Phone',
      registrantId: 'RegistrantId',
      rejectReason: 'RejectReason',
      requestId: 'RequestId',
      state: 'State',
      status: 'Status',
      street: 'Street',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeAtiRegistrantResponseBodyAccessDeniedDetail,
      cc: 'string',
      city: 'string',
      createTimestamp: 'string',
      documentCode: 'string',
      documentType: 'string',
      email: 'string',
      name: 'string',
      phone: 'string',
      registrantId: 'string',
      rejectReason: 'string',
      requestId: 'string',
      state: 'string',
      status: 'string',
      street: 'string',
      updateTimestamp: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

