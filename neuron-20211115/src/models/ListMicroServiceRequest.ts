// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMicroServiceRequest extends $dara.Model {
  /**
   * @example
   * gmtCreated
   */
  orderBy?: string;
  /**
   * @example
   * desc
   */
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 1
   */
  pbcId?: number;
  /**
   * @example
   * 1
   */
  serviceIds?: string;
  static names(): { [key: string]: string } {
    return {
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcId: 'pbcId',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pbcId: 'number',
      serviceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

