// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLogstashRequestNodeSpec } from "./UpdateLogstashRequestNodeSpec";


export class UpdateLogstashRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  nodeAmount?: number;
  nodeSpec?: UpdateLogstashRequestNodeSpec;
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'number',
      nodeSpec: UpdateLogstashRequestNodeSpec,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

