// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateIndexTemplateRequestTemplate } from "./CreateIndexTemplateRequestTemplate";


export class CreateIndexTemplateRequest extends $dara.Model {
  /**
   * @example
   * E1136AE9-4E49-4585-9358-6FDD2A6D****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataStream?: boolean;
  /**
   * @example
   * policy-1
   */
  ilmPolicy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  indexPatterns?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * index-template
   */
  indexTemplate?: string;
  /**
   * @example
   * 100
   */
  priority?: number;
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

