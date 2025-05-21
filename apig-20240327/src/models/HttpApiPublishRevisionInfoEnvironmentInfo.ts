// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo } from "./HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo";


export class HttpApiPublishRevisionInfoEnvironmentInfo extends $dara.Model {
  /**
   * @example
   * 测试
   */
  alias?: string;
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  gatewayInfo?: HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      gatewayInfo: HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo,
      name: 'string',
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

