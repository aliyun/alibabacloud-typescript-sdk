// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteZoneRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value from your client for this parameter. The token must contain only ASCII characters and be no more than 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The unique ID of the zone.
   * 
   * > You must dissociate a built-in authoritative domain name from its scope before you delete it.
   * 
   * This parameter is required.
   * 
   * @example
   * 0e41496f12da01311d314f17b801****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

