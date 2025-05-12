// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChainResponseBodyChainConfigNodesNodeConfig } from "./GetChainResponseBodyChainConfigNodesNodeConfig";


export class GetChainResponseBodyChainConfigNodes extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  nodeConfig?: GetChainResponseBodyChainConfigNodesNodeConfig;
  /**
   * @example
   * VULNERABILITY_SCANNING
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      nodeConfig: 'NodeConfig',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      nodeConfig: GetChainResponseBodyChainConfigNodesNodeConfig,
      nodeName: 'string',
    };
  }

  validate() {
    if(this.nodeConfig && typeof (this.nodeConfig as any).validate === 'function') {
      (this.nodeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

