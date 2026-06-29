// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskWorkforceStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the member list. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of members per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The statistics type. Valid values:
   * - ITEM: Statistics are collected based on individual review records.
   * - OPERATORCELL: Statistics are collected based on operation units. A single ITEM may contain multiple operation units.
   * 
   * @example
   * ITEM
   */
  statType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statType: 'StatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      statType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

