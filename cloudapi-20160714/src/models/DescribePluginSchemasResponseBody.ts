// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginSchemasResponseBodyPluginSchemasPluginSchema extends $dara.Model {
  /**
   * @example
   * plugin scheme description
   */
  description?: string;
  /**
   * @example
   * 4107**
   */
  documentId?: string;
  /**
   * @example
   * VPC_C
   */
  name?: string;
  /**
   * @example
   * true
   */
  supportClassic?: boolean;
  /**
   * @example
   * plugin schema title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      documentId: 'DocumentId',
      name: 'Name',
      supportClassic: 'SupportClassic',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentId: 'string',
      name: 'string',
      supportClassic: 'boolean',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponseBodyPluginSchemas extends $dara.Model {
  pluginSchema?: DescribePluginSchemasResponseBodyPluginSchemasPluginSchema[];
  static names(): { [key: string]: string } {
    return {
      pluginSchema: 'PluginSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginSchema: { 'type': 'array', 'itemType': DescribePluginSchemasResponseBodyPluginSchemasPluginSchema },
    };
  }

  validate() {
    if(Array.isArray(this.pluginSchema)) {
      $dara.Model.validateArray(this.pluginSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSchemasResponseBody extends $dara.Model {
  pluginSchemas?: DescribePluginSchemasResponseBodyPluginSchemas;
  /**
   * @example
   * 2D39D1B3-8548-508A-9CE2-7F4A3F2A7989
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginSchemas: 'PluginSchemas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginSchemas: DescribePluginSchemasResponseBodyPluginSchemas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pluginSchemas && typeof (this.pluginSchemas as any).validate === 'function') {
      (this.pluginSchemas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

