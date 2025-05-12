// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChainResponseBodyChainConfigRoutersFrom } from "./GetChainResponseBodyChainConfigRoutersFrom";
import { GetChainResponseBodyChainConfigRoutersTo } from "./GetChainResponseBodyChainConfigRoutersTo";


export class GetChainResponseBodyChainConfigRouters extends $dara.Model {
  from?: GetChainResponseBodyChainConfigRoutersFrom;
  to?: GetChainResponseBodyChainConfigRoutersTo;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: GetChainResponseBodyChainConfigRoutersFrom,
      to: GetChainResponseBodyChainConfigRoutersTo,
    };
  }

  validate() {
    if(this.from && typeof (this.from as any).validate === 'function') {
      (this.from as any).validate();
    }
    if(this.to && typeof (this.to as any).validate === 'function') {
      (this.to as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

