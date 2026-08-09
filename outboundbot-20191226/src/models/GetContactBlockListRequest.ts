// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactBlockListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the total number of entries.
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
   * 846e20ae-e113-4231-a792-cb354187c9f6
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. This parameter is required.
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

