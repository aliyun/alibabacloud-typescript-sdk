// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCardSmsDetailsResponseBodyCardSendDetailDTORecords } from "./GetCardSmsDetailsResponseBodyCardSendDetailDtorecords";


export class GetCardSmsDetailsResponseBodyCardSendDetailDTO extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of card SMS sending records
   */
  records?: GetCardSmsDetailsResponseBodyCardSendDetailDTORecords[];
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetCardSmsDetailsResponseBodyCardSendDetailDTORecords },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

