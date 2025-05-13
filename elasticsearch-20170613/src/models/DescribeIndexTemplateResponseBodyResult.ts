// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIndexTemplateResponseBodyResultTemplate } from "./DescribeIndexTemplateResponseBodyResultTemplate";


export class DescribeIndexTemplateResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  dataStream?: boolean;
  /**
   * @example
   * cube_default_ilm_policy
   */
  ilmPolicy?: string;
  indexPatterns?: string[];
  /**
   * @example
   * data-stream-default
   */
  indexTemplate?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
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

