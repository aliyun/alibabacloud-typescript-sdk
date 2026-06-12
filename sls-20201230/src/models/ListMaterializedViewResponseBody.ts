// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterializedViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of materialized views returned on the current page.
   */
  count?: number;
  /**
   * @remarks
   * A list of materialized views.
   */
  materializedViews?: string[];
  /**
   * @remarks
   * The total number of materialized views that match the query.
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      materializedViews: 'materializedViews',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      materializedViews: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.materializedViews)) {
      $dara.Model.validateArray(this.materializedViews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

