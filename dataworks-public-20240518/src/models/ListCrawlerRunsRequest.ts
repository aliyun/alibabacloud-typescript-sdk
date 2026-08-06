// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlerRunsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1710239005403
   */
  startTimeFrom?: number;
  /**
   * @example
   * 1710325405403
   */
  startTimeTo?: number;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimeFrom: 'StartTimeFrom',
      startTimeTo: 'StartTimeTo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTimeFrom: 'number',
      startTimeTo: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

