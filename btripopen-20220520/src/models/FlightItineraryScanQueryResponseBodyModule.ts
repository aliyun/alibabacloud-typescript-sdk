// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightItineraryScanQueryResponseBodyModuleItems } from "./FlightItineraryScanQueryResponseBodyModuleItems";


export class FlightItineraryScanQueryResponseBodyModule extends $dara.Model {
  items?: FlightItineraryScanQueryResponseBodyModuleItems[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  totalPage?: number;
  /**
   * @example
   * 30
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNo: 'page_no',
      pageSize: 'page_size',
      totalPage: 'total_page',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FlightItineraryScanQueryResponseBodyModuleItems },
      pageNo: 'number',
      pageSize: 'number',
      totalPage: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

