// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionNetworkRuleTransform } from "./SessionNetworkRuleTransform";


export class SessionNetworkRule extends $dara.Model {
  transform?: SessionNetworkRuleTransform;
  static names(): { [key: string]: string } {
    return {
      transform: 'transform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transform: SessionNetworkRuleTransform,
    };
  }

  validate() {
    if(this.transform && typeof (this.transform as any).validate === 'function') {
      (this.transform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

