// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHybridProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the Security Center agent.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-proxy-14bbbb37-c4b9-4e86-83bd-137a940a6ec4
   */
  proxyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      proxyUuid: 'ProxyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

