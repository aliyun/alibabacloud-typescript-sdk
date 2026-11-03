// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexTemplateRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * The aliases.
   * 
   * @example
   * {\\"mydata\\":{}}
   */
  aliases?: string;
  /**
   * @remarks
   * The mappings.
   * 
   * @example
   * {\\"properties\\":{\\"created_at\\":{\\"format\\":\\"EEE MMM dd HH:mm:ss Z yyyy\\",\\"type\\":\\"date\\"},\\"host_name\\":{\\"type\\":\\"keyword\\"}}}
   */
  mappings?: string;
  /**
   * @remarks
   * The settings.
   * 
   * @example
   * {\\"index.number_of_shards\\":\\"1\\"}
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

export class CreateIndexTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * E1136AE9-4E49-4585-9358-6FDD2A6D****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the data stream. Valid values:
   * 
   * - true: enables the data stream.
   * - false: disables the data stream. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  dataStream?: boolean;
  /**
   * @remarks
   * The life epoch Policy Name.
   * 
   * @example
   * policy-1
   */
  ilmPolicy?: string;
  /**
   * @remarks
   * The regular expression for the index pattern.
   * 
   * This parameter is required.
   */
  indexPatterns?: string[];
  /**
   * @remarks
   * The name of the index template.
   * 
   * This parameter is required.
   * 
   * @example
   * index-template
   */
  indexTemplate?: string;
  /**
   * @remarks
   * The priority of the cluster index template. A larger value indicates a higher priority.
   * 
   * @example
   * 30
   */
  priority?: number;
  /**
   * @remarks
   * The template settings. For more information, see [Multiple Component Templates](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-put-template.html#multiple-component-templates).
   */
  template?: CreateIndexTemplateRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
      clientToken: 'string',
      dataStream: 'boolean',
      ilmPolicy: 'string',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      priority: 'number',
      template: CreateIndexTemplateRequestTemplate,
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

