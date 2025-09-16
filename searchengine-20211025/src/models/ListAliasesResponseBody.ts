// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliasesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * alias name
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * index name
   * 
   * @example
   * index
   */
  index?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      index: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
  result?: ListAliasesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAliasesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

