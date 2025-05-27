// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiscoverEventSourceResponseBodyDataSourceMySQLDiscovery } from "./DiscoverEventSourceResponseBodyDataSourceMySqldiscovery";


export class DiscoverEventSourceResponseBodyData extends $dara.Model {
  sourceMySQLDiscovery?: DiscoverEventSourceResponseBodyDataSourceMySQLDiscovery;
  static names(): { [key: string]: string } {
    return {
      sourceMySQLDiscovery: 'SourceMySQLDiscovery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceMySQLDiscovery: DiscoverEventSourceResponseBodyDataSourceMySQLDiscovery,
    };
  }

  validate() {
    if(this.sourceMySQLDiscovery && typeof (this.sourceMySQLDiscovery as any).validate === 'function') {
      (this.sourceMySQLDiscovery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

