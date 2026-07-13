// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAtiRegistrantsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * AddRspDomainServerHoldStatusForGatewayOte
   */
  authAction?: string;
  /**
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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

export class ListAtiRegistrantsResponseBodyRegistrantsRegistrant extends $dara.Model {
  cc?: string;
  city?: string;
  createTimestamp?: string;
  documentCode?: string;
  documentType?: string;
  email?: string;
  name?: string;
  registrantId?: string;
  state?: string;
  status?: string;
  updateTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      city: 'City',
      createTimestamp: 'CreateTimestamp',
      documentCode: 'DocumentCode',
      documentType: 'DocumentType',
      email: 'Email',
      name: 'Name',
      registrantId: 'RegistrantId',
      state: 'State',
      status: 'Status',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      city: 'string',
      createTimestamp: 'string',
      documentCode: 'string',
      documentType: 'string',
      email: 'string',
      name: 'string',
      registrantId: 'string',
      state: 'string',
      status: 'string',
      updateTimestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiRegistrantsResponseBodyRegistrants extends $dara.Model {
  registrant?: ListAtiRegistrantsResponseBodyRegistrantsRegistrant[];
  static names(): { [key: string]: string } {
    return {
      registrant: 'Registrant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrant: { 'type': 'array', 'itemType': ListAtiRegistrantsResponseBodyRegistrantsRegistrant },
    };
  }

  validate() {
    if(Array.isArray(this.registrant)) {
      $dara.Model.validateArray(this.registrant);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiRegistrantsResponseBody extends $dara.Model {
  accessDeniedDetail?: ListAtiRegistrantsResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  registrants?: ListAtiRegistrantsResponseBodyRegistrants;
  /**
   * @example
   * B57C121B-A45F-44D8-A9B2-XXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * 224
   */
  totalItems?: number;
  /**
   * @example
   * 11
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      registrants: 'Registrants',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ListAtiRegistrantsResponseBodyAccessDeniedDetail,
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      registrants: ListAtiRegistrantsResponseBodyRegistrants,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.registrants && typeof (this.registrants as any).validate === 'function') {
      (this.registrants as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

