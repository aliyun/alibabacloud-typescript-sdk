// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceIndicesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve all indexes. Valid values:
   * 
   * - true: Returns the index list that includes system indexes.
   * 
   * - false (default): Returns the index list that excludes system indexes.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * Specifies whether to display only managed indexes. Valid values:
   * 
   * - true: Displays only managed indexes.
   * 
   * - false (default): Displays all indexes.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  /**
   * @remarks
   * Specifies whether to display only OpenStore cold-phase indexes. Valid values:
   * 
   * - true: Displays only OpenStore cold-phase indexes.
   * 
   * - false (default): Displays all indexes.
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
   * The page number of the instance list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Maximum value: 100. Default value: 20.
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

