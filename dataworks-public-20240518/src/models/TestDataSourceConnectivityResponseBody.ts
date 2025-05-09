// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestDataSourceConnectivityResponseBodyConnectivity } from "./TestDataSourceConnectivityResponseBodyConnectivity";


export class TestDataSourceConnectivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the connectivity test.
   */
  connectivity?: TestDataSourceConnectivityResponseBodyConnectivity;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectivity: 'Connectivity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectivity: TestDataSourceConnectivityResponseBodyConnectivity,
      requestId: 'string',
    };
  }

  validate() {
    if(this.connectivity && typeof (this.connectivity as any).validate === 'function') {
      (this.connectivity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

