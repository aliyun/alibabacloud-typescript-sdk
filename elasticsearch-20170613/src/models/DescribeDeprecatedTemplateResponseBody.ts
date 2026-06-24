// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeprecatedTemplateResponseBodyResultTemplate extends $dara.Model {
  /**
   * @remarks
   * The alias configuration.
   * 
   * @example
   * "{}"
   */
  aliases?: string;
  /**
   * @remarks
   * The mappings configuration of the index template.
   * 
   * @example
   * "{\\"properties\\":{\\"created_at\\":{\\"format\\":\\"EEE MMM dd HH:mm:ss Z yyyy\\",\\"type\\":\\"date\\"},\\"host_name\\":{\\"type\\":\\"keyword\\"}}}"
   */
  mappings?: string;
  /**
   * @remarks
   * The settings configuration of the index template.
   * 
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
   * @remarks
   * Indicates whether automatic creation of a data stream is enabled. Valid values:
   * 
   * - true: Automatic creation of a data stream is enabled.
   * - false: Automatic creation of a data stream is not enabled.
   * 
   * @example
   * false
   */
  dataStream?: boolean;
  /**
   * @remarks
   * The index pattern information.
   */
  indexPatterns?: string[];
  /**
   * @remarks
   * The index template name.
   * 
   * @example
   * openstore-index-template
   */
  indexTemplate?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 100
   */
  order?: number;
  /**
   * @remarks
   * The index template configuration information.
   */
  template?: DescribeDeprecatedTemplateResponseBodyResultTemplate;
  /**
   * @remarks
   * The version of the index template.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
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

