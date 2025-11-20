// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumersRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type. Valid values: **AI** and **API**.
   * 
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * The name used to perform a fuzzy search for operations.
   * 
   * @example
   * UI-test
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number to return. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'gatewayType',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      nameLike: 'string',
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

