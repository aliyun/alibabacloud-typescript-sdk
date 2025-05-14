// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomizedVoicesResponseBodyDataCustomizedVoiceList } from "./ListCustomizedVoicesResponseBodyDataCustomizedVoiceList";


export class ListCustomizedVoicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried personalized human voices.
   */
  customizedVoiceList?: ListCustomizedVoicesResponseBodyDataCustomizedVoiceList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 41
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customizedVoiceList: 'CustomizedVoiceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoiceList: { 'type': 'array', 'itemType': ListCustomizedVoicesResponseBodyDataCustomizedVoiceList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customizedVoiceList)) {
      $dara.Model.validateArray(this.customizedVoiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

