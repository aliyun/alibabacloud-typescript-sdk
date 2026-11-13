// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerModelCardGrantsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by model card ID for reverse lookup.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by principal ID. This parameter must be used together with principalType.
   * 
   * @example
   * cs-d00000000000000000000
   */
  principalId?: string;
  /**
   * @remarks
   * Filters by principal type. Valid values: Consumer and ConsumerGroup. This parameter must be used together with principalId.
   * 
   * @example
   * Consumer
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      principalId: 'principalId',
      principalType: 'principalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

