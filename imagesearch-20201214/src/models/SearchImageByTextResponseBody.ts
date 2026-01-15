// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByTextResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @example
   * 111
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 222
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * xxxxxx
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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
   * @example
   * 8888888
   */
  categoryId?: number;
  /**
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 2
   */
  intAttr2?: number;
  /**
   * @example
   * 2
   */
  intAttr3?: number;
  /**
   * @example
   * 2
   */
  intAttr4?: number;
  /**
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @example
   * 1
   */
  score?: number;
  /**
   * @example
   * xxxx
   */
  strAttr?: string;
  /**
   * @example
   * xxxx
   */
  strAttr2?: string;
  /**
   * @example
   * xxxx
   */
  strAttr3?: string;
  /**
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
   * @example
   * 10
   */
  docsFound?: number;
  /**
   * @example
   * 10000
   */
  docsReturn?: number;
  /**
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
   * @example
   * 88888888
   */
  id?: number;
  /**
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
  accessDeniedDetail?: SearchImageByTextResponseBodyAccessDeniedDetail;
  auctions?: SearchImageByTextResponseBodyAuctions[];
  /**
   * @example
   * 0
   */
  code?: number;
  head?: SearchImageByTextResponseBodyHead;
  /**
   * @example
   * success
   */
  msg?: string;
  picInfo?: SearchImageByTextResponseBodyPicInfo;
  /**
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
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

