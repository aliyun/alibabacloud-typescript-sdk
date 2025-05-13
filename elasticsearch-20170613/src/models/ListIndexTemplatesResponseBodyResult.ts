// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndexTemplatesResponseBodyResultTemplate } from "./ListIndexTemplatesResponseBodyResultTemplate";


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

