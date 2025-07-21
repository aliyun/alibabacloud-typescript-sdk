// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliasesResponseBodyAliasesAlias extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the alias.
   * 
   * @example
   * acs:kms:cn-hangzhou:123456:alias/ExampleAlias1
   */
  aliasArn?: string;
  /**
   * @remarks
   * The ID of the alias.
   * 
   * @example
   * alias/ExampleAlias1
   */
  aliasName?: string;
  /**
   * @remarks
   * The CMK to which the alias belongs.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasArn: 'AliasArn',
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasArn: 'string',
      aliasName: 'string',
      keyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBodyAliases extends $dara.Model {
  alias?: ListAliasesResponseBodyAliasesAlias[];
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': ListAliasesResponseBodyAliasesAlias },
    };
  }

  validate() {
    if(Array.isArray(this.alias)) {
      $dara.Model.validateArray(this.alias);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alias of the user.
   */
  aliases?: ListAliasesResponseBodyAliases;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1b57992c-834b-4811-a889-f8bac1ba0353
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned aliases.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: ListAliasesResponseBodyAliases,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.aliases && typeof (this.aliases as any).validate === 'function') {
      (this.aliases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

