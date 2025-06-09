// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSpecReviewTasksRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      size: 'size',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      size: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

