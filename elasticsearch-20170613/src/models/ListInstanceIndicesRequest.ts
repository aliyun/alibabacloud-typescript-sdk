// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceIndicesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve all indices. Valid values:
   * 
   * - true: returns a list of indices including system indices.
   * 
   * - false: returns a list of indices excluding system indices. Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * Specifies whether to view only managed indices. Valid values:
   * 
   * - true: views only managed indices.
   * 
   * - false: views all indices. Default value: false.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  /**
   * @remarks
   * Specifies whether to view only OpenStore cold-phase indices. Valid values:
   * 
   * - true: views only OpenStore cold-phase indices.
   * 
   * - false: views all indices. Default value: false.
   * 
   * @example
   * false
   */
  isOpenstore?: boolean;
  /**
   * @remarks
   * The index name. Fuzzy match is supported.
   * 
   * @example
   * log-0001
   */
  name?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 15
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      isManaged: 'isManaged',
      isOpenstore: 'isOpenstore',
      name: 'name',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      isManaged: 'boolean',
      isOpenstore: 'boolean',
      name: 'string',
      page: 'number',
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

