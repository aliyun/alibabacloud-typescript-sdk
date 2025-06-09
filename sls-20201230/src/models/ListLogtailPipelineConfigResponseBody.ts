// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogtailPipelineConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Logtail pipeline configurations that are returned on the current page.
   */
  configs?: string[];
  /**
   * @remarks
   * The number of Logtail pipeline configurations that are returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The total number of Logtail pipeline configurations in the current project.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      count: 'count',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

