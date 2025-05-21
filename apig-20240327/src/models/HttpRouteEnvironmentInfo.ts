// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteEnvironmentInfoGatewayInfo } from "./HttpRouteEnvironmentInfoGatewayInfo";
import { HttpRouteEnvironmentInfoSubDomains } from "./HttpRouteEnvironmentInfoSubDomains";


export class HttpRouteEnvironmentInfo extends $dara.Model {
  alias?: string;
  environmentId?: string;
  gatewayInfo?: HttpRouteEnvironmentInfoGatewayInfo;
  name?: string;
  subDomains?: HttpRouteEnvironmentInfoSubDomains[];
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      subDomains: 'subDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      gatewayInfo: HttpRouteEnvironmentInfoGatewayInfo,
      name: 'string',
      subDomains: { 'type': 'array', 'itemType': HttpRouteEnvironmentInfoSubDomains },
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(Array.isArray(this.subDomains)) {
      $dara.Model.validateArray(this.subDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

