// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumersRequest extends $dara.Model {
  /**
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @example
   * UI-test
   */
  nameLike?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

