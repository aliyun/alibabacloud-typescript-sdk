// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestEventSourceConfigRequestSourceMySQLParameters } from "./TestEventSourceConfigRequestSourceMySqlparameters";


export class TestEventSourceConfigRequest extends $dara.Model {
  sourceMySQLParameters?: TestEventSourceConfigRequestSourceMySQLParameters;
  static names(): { [key: string]: string } {
    return {
      sourceMySQLParameters: 'SourceMySQLParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceMySQLParameters: TestEventSourceConfigRequestSourceMySQLParameters,
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

