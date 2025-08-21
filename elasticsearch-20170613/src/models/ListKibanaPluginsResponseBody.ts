// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKibanaPluginsResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPluginsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The description of the plug-in.
   * 
   * @example
   * Customize DSL statements to query data.
   */
  description?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * bsearch_querybuilder
   */
  name?: string;
  /**
   * @remarks
   * The source of the plug-in.
   * 
   * @example
   * SYSTEM
   */
  source?: string;
  /**
   * @remarks
   * The URL of the introduction to the plug-in. The value null is supported.
   * 
   * @example
   * https://xxxx
   */
  specificationUrl?: string;
  /**
   * @remarks
   * The installation status of the plug-in.
   * 
   * @example
   * INSTALLED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      source: 'source',
      specificationUrl: 'specificationUrl',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      source: 'string',
      specificationUrl: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request header.
   */
  headers?: ListKibanaPluginsResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11234B4A-34CE-473B-8E61-AD95702E****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the plug-ins.
   */
  result?: ListKibanaPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListKibanaPluginsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListKibanaPluginsResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

