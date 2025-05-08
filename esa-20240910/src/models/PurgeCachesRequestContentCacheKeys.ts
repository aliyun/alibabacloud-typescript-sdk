// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesRequestContentCacheKeys extends $dara.Model {
  /**
   * @remarks
   * When refreshing, specify the header information corresponding to the cache key. When the custom cache key feature switch is enabled, the cache key will be generated based on the specified header for refreshing.
   * 
   * **UserGeo: Country/Region**
   * - Country/region codes follow the ISO 3166-2 standard.
   * 
   * **UserDeviceType: Device Type, currently there are three enum values**
   * - desktop
   *  - tablet
   *  - mobile
   * 
   * **UserLanguage: Language**
   * - Language codes follow the ISO 639-1 or BCP47 standards. For example, input \\"zh\\" to refresh content in Chinese.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * URL address to be refreshed.
   * 
   * @example
   * http://a.com/1.jpg?b=1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      url: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

