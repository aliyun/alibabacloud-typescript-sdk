// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedDataKeyVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the managed data key (DK) to query. This parameter is required.
   * 
   * @example
   * example-data-key
   */
  dataKeyName?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataKeyName: 'DataKeyName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataKeyName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

