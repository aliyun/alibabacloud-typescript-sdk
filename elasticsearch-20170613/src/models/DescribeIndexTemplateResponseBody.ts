// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIndexTemplateResponseBodyResultTemplate extends $dara.Model {
  /**
   * @remarks
   * The aliases configuration.
   * 
   * @example
   * {\\"mydata\\":{}}
   */
  aliases?: string;
  /**
   * @remarks
   * The mappings configuration.
   * 
   * @example
   * {\\"properties\\":{\\"created_at\\":{\\"format\\":\\"EEE MMM dd HH:mm:ss Z yyyy\\",\\"type\\":\\"date\\"},\\"host_name\\":{\\"type\\":\\"keyword\\"}}}
   */
  mappings?: string;
  /**
   * @remarks
   * The settings configuration.
   * 
   * @example
   * {\\"index.refresh_interval\\":\\"1s\\"}
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

export class DescribeIndexTemplateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data stream is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  dataStream?: boolean;
  /**
   * @remarks
   * The Policy Name of the lifecycle epoch.
   * 
   * @example
   * cube_default_ilm_policy
   */
  ilmPolicy?: string;
  indexPatterns?: string[];
  /**
   * @remarks
   * The name of the index template.
   * 
   * @example
   * data-stream-default
   */
  indexTemplate?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The component template.
   */
  template?: DescribeIndexTemplateResponseBodyResultTemplate;
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
      template: DescribeIndexTemplateResponseBodyResultTemplate,
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

export class DescribeIndexTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25DB38F8-82E4-4D16-82BB-FF077C7F****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the index template.
   */
  result?: DescribeIndexTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeIndexTemplateResponseBodyResult,
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

