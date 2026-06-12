// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterializedViewsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the materialized view. Fuzzy search is supported.
   */
  name?: string;
  /**
   * @remarks
   * The position from which to start returning results for pagination. Default value: 0.
   */
  offset?: number;
  /**
   * @remarks
   * The number of materialized views to return. The actual number of returned materialized views may be less than the specified value. If you do not specify this parameter, a system default is used.
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

