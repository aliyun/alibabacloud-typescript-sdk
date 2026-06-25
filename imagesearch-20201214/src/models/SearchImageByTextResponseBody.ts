// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByTextResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The action for the authentication request.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The authentication principal information.
   * 
   * @example
   * 111
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the authentication principal.
   * 
   * @example
   * 222
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authentication principal.
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
   * xxxxxx
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * Valid values:
   * - ImplicitDeny: no policy is matched.
   * - ExplicitDeny: an explicit Deny policy is matched.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that caused the access denial.
   * 
   * @example
   * PauseNotify
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

export class SearchImageByTextResponseBodyAuctions extends $dara.Model {
  /**
   * @remarks
   * The image category.
   * 
   * @example
   * 8888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The custom content defined by the user.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr2?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr3?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr4?: number;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The image similarity score. Valid values: 0 to 1.
   * > You must upgrade the SDK to V3.1.1 to use this feature.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * xxxx
   */
  strAttr?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * xxxx
   */
  strAttr2?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * xxxx
   */
  strAttr3?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * xxxx
   */
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyHead extends $dara.Model {
  /**
   * @remarks
   * The number of results returned.
   * 
   * @example
   * 10
   */
  docsFound?: number;
  /**
   * @remarks
   * The number of matched results in the instance.
   * 
   * @example
   * 10000
   */
  docsReturn?: number;
  /**
   * @remarks
   * The time consumed by the search, in milliseconds.
   * 
   * @example
   * 95
   */
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
      searchTime: 'SearchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsFound: 'number',
      docsReturn: 'number',
      searchTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyPicInfoAllCategories extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 88888888
   */
  id?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * other
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * All categories supported by the system.
   */
  allCategories?: SearchImageByTextResponseBodyPicInfoAllCategories[];
  static names(): { [key: string]: string } {
    return {
      allCategories: 'AllCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCategories: { 'type': 'array', 'itemType': SearchImageByTextResponseBodyPicInfoAllCategories },
    };
  }

  validate() {
    if(Array.isArray(this.allCategories)) {
      $dara.Model.validateArray(this.allCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication details.
   */
  accessDeniedDetail?: SearchImageByTextResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The description information of all returned products.
   */
  auctions?: SearchImageByTextResponseBodyAuctions[];
  /**
   * @remarks
   * The error code. Valid values:
   * - 0: successful.
   * - Non-zero value: failed.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The overview of the search results.
   */
  head?: SearchImageByTextResponseBodyHead;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The category information.
   */
  picInfo?: SearchImageByTextResponseBodyPicInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      auctions: 'Auctions',
      code: 'Code',
      head: 'Head',
      msg: 'Msg',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: SearchImageByTextResponseBodyAccessDeniedDetail,
      auctions: { 'type': 'array', 'itemType': SearchImageByTextResponseBodyAuctions },
      code: 'number',
      head: SearchImageByTextResponseBodyHead,
      msg: 'string',
      picInfo: SearchImageByTextResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.auctions)) {
      $dara.Model.validateArray(this.auctions);
    }
    if(this.head && typeof (this.head as any).validate === 'function') {
      (this.head as any).validate();
    }
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

