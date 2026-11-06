// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketProductRefConfig } from "./HiMarketProductRefConfig";


export class GetProductRefResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API configuration currently associated with the API product. The structure is derived from the common structure HiMarketProductRefConfig. This structure contains two members: gatewayId and apigRefConfig. The inner apigRefConfig contains the following members: mcpServerId, mcpRouteId, mcpServerName, agentApiId, agentApiName, modelApiId, and modelApiName.
   */
  apigRefConfig?: HiMarketProductRefConfig;
  /**
   * @remarks
   * The ID of the gateway instance where the association configuration of the API product resides.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      apigRefConfig: 'apigRefConfig',
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apigRefConfig: HiMarketProductRefConfig,
      gatewayId: 'string',
    };
  }

  validate() {
    if(this.apigRefConfig && typeof (this.apigRefConfig as any).validate === 'function') {
      (this.apigRefConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductRefResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetProductRefResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProductRefResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

