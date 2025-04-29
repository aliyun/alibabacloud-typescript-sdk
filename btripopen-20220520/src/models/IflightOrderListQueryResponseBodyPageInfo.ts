// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryResponseBodyPageInfo extends $dara.Model {
  number?: number;
  /**
   * @example
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4ZGViODFlYmM3MYzM4
   */
  scrollId?: string;
  /**
   * @example
   * 100
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'number',
      scrollId: 'scroll_id',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      scrollId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

