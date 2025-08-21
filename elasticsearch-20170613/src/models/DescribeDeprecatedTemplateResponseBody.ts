// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeprecatedTemplateResponseBodyResultTemplate extends $dara.Model {
  /**
   * @example
   * "{}"
   */
  aliases?: string;
  /**
   * @example
   * "{\\"properties\\":{\\"created_at\\":{\\"format\\":\\"EEE MMM dd HH:mm:ss Z yyyy\\",\\"type\\":\\"date\\"},\\"host_name\\":{\\"type\\":\\"keyword\\"}}}"
   */
  mappings?: string;
  /**
   * @example
   * "{\\"index.number_of_shards\\":\\"1\\"}"
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

export class DescribeDeprecatedTemplateResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  dataStream?: boolean;
  indexPatterns?: string[];
  /**
   * @example
   * openstore-index-template
   */
  indexTemplate?: string;
  /**
   * @example
   * 100
   */
  order?: number;
  template?: DescribeDeprecatedTemplateResponseBodyResultTemplate;
  /**
   * @example
   * 70000
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      indexPatterns: 'indexPatterns',
      indexTemplate: 'indexTemplate',
      order: 'order',
      template: 'template',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      order: 'number',
      template: DescribeDeprecatedTemplateResponseBodyResultTemplate,
      version: 'string',
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

export class DescribeDeprecatedTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
  result?: DescribeDeprecatedTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDeprecatedTemplateResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

