// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMultiAccountResourcesRequestSortCriterion extends $dara.Model {
  /**
   * @remarks
   * The attribute based on which the entries are sorted.
   * 
   * The value CreateTime indicates the creation time of resources.
   * 
   * @example
   * CreateTime
   */
  key?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   ASC: The entries are sorted in ascending order. This value is the default value.
   * *   DESC: The entries are sorted in descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

