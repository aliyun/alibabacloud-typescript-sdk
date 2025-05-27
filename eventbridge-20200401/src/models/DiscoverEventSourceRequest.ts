// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiscoverEventSourceRequestSourceMySQLParameters } from "./DiscoverEventSourceRequestSourceMySqlparameters";


export class DiscoverEventSourceRequest extends $dara.Model {
  sourceMySQLParameters?: DiscoverEventSourceRequestSourceMySQLParameters;
  static names(): { [key: string]: string } {
    return {
      sourceMySQLParameters: 'SourceMySQLParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceMySQLParameters: DiscoverEventSourceRequestSourceMySQLParameters,
    };
  }

  validate() {
    if(this.sourceMySQLParameters && typeof (this.sourceMySQLParameters as any).validate === 'function') {
      (this.sourceMySQLParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

