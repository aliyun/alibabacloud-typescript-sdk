// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigL7UsKeepaliveRequest extends $dara.Model {
  domain?: string;
  downstreamKeepalive?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  upstreamKeepalive?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      downstreamKeepalive: 'DownstreamKeepalive',
      upstreamKeepalive: 'UpstreamKeepalive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      downstreamKeepalive: 'string',
      upstreamKeepalive: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

