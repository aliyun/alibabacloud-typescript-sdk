// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStoreViewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of returned datasets.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The dataset names.
   */
  storeviews?: string[];
  /**
   * @remarks
   * The total number of datasets in the project.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      storeviews: 'storeviews',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      storeviews: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storeviews)) {
      $dara.Model.validateArray(this.storeviews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

