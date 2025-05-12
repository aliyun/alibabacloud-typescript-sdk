// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChainInstanceResponseBodyChainInstancesChain extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * chi-m42gbku0****
   */
  chainId?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * test-chain
   */
  chainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      chainName: 'ChainName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      chainName: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

