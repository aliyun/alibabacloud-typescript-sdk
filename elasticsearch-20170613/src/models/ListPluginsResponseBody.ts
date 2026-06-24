// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of records returned.
   * 
   * @example
   * 2
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

export class ListPluginsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The plugin description.
   * 
   * @example
   * IK analysis plug-in for Elasticsearch.
   */
  description?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * analysis-ik
   */
  name?: string;
  /**
   * @remarks
   * The plugin source type.
   * 
   * @example
   * SYSTEM
   */
  source?: string;
  /**
   * @remarks
   * The URL of the plugin documentation.
   * 
   * @example
   * https://xxxx.html
   */
  specificationUrl?: string;
  /**
   * @remarks
   * The plugin status.
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

export class ListPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListPluginsResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A5D8E74-565C-43DC-B031-29289FA9****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListPluginsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPluginsResponseBodyResult },
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

