// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterializedViewRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the materialized view. Use this to query for a specific materialized view.
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to skip before returning results. This parameter is used for pagination. Default value: 0.
   */
  offset?: number;
  /**
   * @remarks
   * The maximum number of materialized views to return per page. Default value: 100. Maximum value: 500.
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

