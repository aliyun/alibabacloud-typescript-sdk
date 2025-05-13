// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeprecatedTemplatesResponseBodyResultTemplate } from "./ListDeprecatedTemplatesResponseBodyResultTemplate";


export class ListDeprecatedTemplatesResponseBodyResult extends $dara.Model {
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
  template?: ListDeprecatedTemplatesResponseBodyResultTemplate;
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
      template: ListDeprecatedTemplatesResponseBodyResultTemplate,
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

