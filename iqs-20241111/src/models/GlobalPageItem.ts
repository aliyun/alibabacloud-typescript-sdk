// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalPageItem extends $dara.Model {
  /**
   * @remarks
   * The full URL that the search result points to.
   * 
   * This parameter is required.
   * 
   * @example
   * https://baijiahao.baidu.com/s?id=1787881554557805096
   */
  link?: string;
  /**
   * @remarks
   * The truncated description of the search result in text format.
   * 
   * @example
   * In terms of 100 km/h to 0 braking performance, the distance is only 33.3 m. Objectively speaking, the Xiaomi SU7 performs really well in this regard. As for range, it features a 101 kWh battery capacity, achieving a CLTC range of 800 km, and an 800 V high-voltage platform that supports 220 km of range in 5 minutes and 510 km in 15 minutes. And in..
   */
  snippet?: string;
  /**
   * @remarks
   * The title of the search result in plain text.
   * 
   * This parameter is required.
   * 
   * @example
   * Xiaomi SU7 priced from 229,900 CNY, executive personally dispels rumors: no price will be announced before launch
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'link',
      snippet: 'snippet',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      snippet: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

