// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssumeRoleChainNode } from "./AssumeRoleChainNode";


export class AssumeRoleChain extends $dara.Model {
  chain?: AssumeRoleChainNode[];
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: { 'type': 'array', 'itemType': AssumeRoleChainNode },
      policy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chain)) {
      $dara.Model.validateArray(this.chain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

