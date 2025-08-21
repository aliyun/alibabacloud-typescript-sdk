// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexTemplatesResponseBodyResultTemplate extends $dara.Model {
  /**
   * @example
   * {\\"index.number_of_shards\\":\\"1\\"}
   */
  aliases?: string;
  /**
   * @example
   * {\\"properties\\":{\\"created_at\\":{\\"format\\":\\"EEE MMM dd HH:mm:ss Z yyyy\\",\\"type\\":\\"date\\"},\\"host_name\\":{\\"type\\":\\"keyword\\"}}}
   */
  mappings?: string;
  /**
   * @example
   * {\\"mydata\\":{}}
   */
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      mappings: 'string',
      settings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  dataStream?: boolean;
  /**
   * @example
   * my_ilm_policy
   */
  ilmPolicy?: string;
  indexPatterns?: string[];
  /**
   * @example
   * my-template
   */
  indexTemplate?: string;
  /**
   * @example
   * 100
   */
  priority?: number;
  template?: ListIndexTemplatesResponseBodyResultTemplate;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      ilmPolicy: 'ilmPolicy',
      indexPatterns: 'indexPatterns',
      indexTemplate: 'indexTemplate',
      priority: 'priority',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      ilmPolicy: 'string',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      priority: 'number',
      template: ListIndexTemplatesResponseBodyResultTemplate,
    };
  }

  validate() {
    if(Array.isArray(this.indexPatterns)) {
      $dara.Model.validateArray(this.indexPatterns);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  result?: ListIndexTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListIndexTemplatesResponseBodyResult },
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

