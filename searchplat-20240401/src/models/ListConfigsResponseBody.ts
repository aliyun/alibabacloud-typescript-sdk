// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   */
  configData?: { [key: string]: any };
  /**
   * @remarks
   * The configuration type. Valid values:
   *  * prompt: Prompt configuration.
   *  * lark: Lark configuration.
   * 
   * @example
   * prompt
   */
  configType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configData: 'configData',
      configType: 'configType',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configData) {
      $dara.Model.validateMap(this.configData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65150BD6-1622-4177-9D30-65B33A9F6969
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration list.
   */
  result?: ListConfigsResponseBodyResult[];
  /**
   * @remarks
   * The total number of configurations.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      result: 'result',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListConfigsResponseBodyResult },
      total: 'number',
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

