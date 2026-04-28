// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductListResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * *
   */
  authAction?: string;
  /**
   * @example
   * *
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * *
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * *
   */
  authPrincipalType?: string;
  /**
   * @example
   * ****
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * *
   */
  noPermissionType?: string;
  /**
   * @example
   * *
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

export class GetProductListResponseBodyDataProductList extends $dara.Model {
  newLabel?: string;
  /**
   * @example
   * hologres
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      newLabel: 'NewLabel',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newLabel: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBodyData extends $dara.Model {
  category?: string;
  productList?: GetProductListResponseBodyDataProductList[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      productList: { 'type': 'array', 'itemType': GetProductListResponseBodyDataProductList },
    };
  }

  validate() {
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBody extends $dara.Model {
  accessDeniedDetail?: GetProductListResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetProductListResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * *
   */
  userMessage?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userMessage: 'UserMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetProductListResponseBodyAccessDeniedDetail,
      code: 'string',
      data: { 'type': 'array', 'itemType': GetProductListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userMessage: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

