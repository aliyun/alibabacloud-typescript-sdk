// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the total number of entries.
   * 
   * @example
   * true
   */
  countTotalRow?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a830781-324e-4568-ae96-309f93090fe1
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      countTotalRow: 'CountTotalRow',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countTotalRow: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

