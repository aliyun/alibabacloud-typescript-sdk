// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the network access type is available.
   */
  available?: boolean;
  /**
   * @remarks
   * The network type. Valid values:
   * - INTRANET: internal network.
   * - INTERNET: public network.
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentBootstrapOptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The external agent ID.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The list of available network access options.
   */
  networkOptions?: GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      networkOptions: 'networkOptions',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      networkOptions: { 'type': 'array', 'itemType': GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkOptions)) {
      $dara.Model.validateArray(this.networkOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentBootstrapOptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The available network access information for the external agent.
   */
  data?: GetExternalAgentBootstrapOptionsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The result message of the request.
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
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetExternalAgentBootstrapOptionsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

