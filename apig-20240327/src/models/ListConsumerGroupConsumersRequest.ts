// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupConsumersRequest extends $dara.Model {
  /**
   * @remarks
   * The fuzzy filter for consumer names.
   * 
   * @example
   * consumer
   */
  nameLike?: string;
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
   * The number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

