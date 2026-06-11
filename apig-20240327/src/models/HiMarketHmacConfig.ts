// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketHmacConfigCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   */
  ak?: string;
  /**
   * @remarks
   * The HMAC mode.
   */
  mode?: string;
  /**
   * @remarks
   * The AccessKey Secret.
   */
  sk?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      mode: 'mode',
      sk: 'sk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      mode: 'string',
      sk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketHmacConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication credentials.
   */
  credentials?: HiMarketHmacConfigCredentials[];
  static names(): { [key: string]: string } {
    return {
      credentials: 'credentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: { 'type': 'array', 'itemType': HiMarketHmacConfigCredentials },
    };
  }

  validate() {
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

