// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpRequestVodTestToolShrinkRequest extends $dara.Model {
  args?: string;
  body?: string;
  headerShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  method?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  proxyIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scheme?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      body: 'Body',
      headerShrink: 'Header',
      host: 'Host',
      method: 'Method',
      ownerId: 'OwnerId',
      proxyIp: 'ProxyIp',
      scheme: 'Scheme',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      body: 'string',
      headerShrink: 'string',
      host: 'string',
      method: 'string',
      ownerId: 'number',
      proxyIp: 'string',
      scheme: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

