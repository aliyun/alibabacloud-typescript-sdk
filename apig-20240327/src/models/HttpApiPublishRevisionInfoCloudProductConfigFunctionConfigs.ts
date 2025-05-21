// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs extends $dara.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * demo-function
   */
  name?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      qualifier: 'qualifier',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      qualifier: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

