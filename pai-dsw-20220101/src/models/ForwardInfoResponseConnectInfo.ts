// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ForwardInfoResponseConnectInfoInternet } from "./ForwardInfoResponseConnectInfoInternet";
import { ForwardInfoResponseConnectInfoIntranet } from "./ForwardInfoResponseConnectInfoIntranet";


export class ForwardInfoResponseConnectInfo extends $dara.Model {
  internet?: ForwardInfoResponseConnectInfoInternet;
  intranet?: ForwardInfoResponseConnectInfoIntranet;
  /**
   * @example
   * DNAT and privateZone are both ready.
   */
  message?: string;
  /**
   * @example
   * Ready
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      internet: 'Internet',
      intranet: 'Intranet',
      message: 'Message',
      phase: 'Phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: ForwardInfoResponseConnectInfoInternet,
      intranet: ForwardInfoResponseConnectInfoIntranet,
      message: 'string',
      phase: 'string',
    };
  }

  validate() {
    if(this.internet && typeof (this.internet as any).validate === 'function') {
      (this.internet as any).validate();
    }
    if(this.intranet && typeof (this.intranet as any).validate === 'function') {
      (this.intranet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

