// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelSuggestV2ResponseBodyModulePopularSuggestInfosPopularInfos } from "./HotelSuggestV2responseBodyModulePopularSuggestInfosPopularInfos";


export class HotelSuggestV2ResponseBodyModulePopularSuggestInfos extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN01x0q19E1QZSqLHVVNh_!!6000000001990-2-tps-54-54.png
   */
  icon?: string;
  popularInfos?: HotelSuggestV2ResponseBodyModulePopularSuggestInfosPopularInfos[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'icon',
      popularInfos: 'popular_infos',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      popularInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModulePopularSuggestInfosPopularInfos },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.popularInfos)) {
      $dara.Model.validateArray(this.popularInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

