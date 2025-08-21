// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAliasesResponseBodyAliasInfosAliasInfo extends $dara.Model {
  /**
   * @example
   * test_alias1
   */
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBodyAliasInfos extends $dara.Model {
  aliasInfo?: QueryAliasesResponseBodyAliasInfosAliasInfo[];
  static names(): { [key: string]: string } {
    return {
      aliasInfo: 'AliasInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasInfo: { 'type': 'array', 'itemType': QueryAliasesResponseBodyAliasInfosAliasInfo },
    };
  }

  validate() {
    if(Array.isArray(this.aliasInfo)) {
      $dara.Model.validateArray(this.aliasInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBody extends $dara.Model {
  aliasInfos?: QueryAliasesResponseBodyAliasInfos;
  /**
   * @example
   * 159E4422-6624-4750-8943-DFD98D34858C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasInfos: 'AliasInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasInfos: QueryAliasesResponseBodyAliasInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.aliasInfos && typeof (this.aliasInfos as any).validate === 'function') {
      (this.aliasInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

