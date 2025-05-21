// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs extends $dara.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  /**
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * spring-demo
   */
  name?: string;
  /**
   * @example
   * public
   */
  namespace?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      groupName: 'groupName',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      groupName: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
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

