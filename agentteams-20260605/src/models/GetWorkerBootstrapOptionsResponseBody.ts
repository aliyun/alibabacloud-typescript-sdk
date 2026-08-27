// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerBootstrapOptionsResponseBodyDataNetworkOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the network type is available.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * INTRANET
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      networkType: 'NetworkType',
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

export class GetWorkerBootstrapOptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * inst-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The Worker name.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The list of network options.
   * 
   * @example
   * {}
   */
  networkOptions?: GetWorkerBootstrapOptionsResponseBodyDataNetworkOptions[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      networkOptions: 'NetworkOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      networkOptions: { 'type': 'array', 'itemType': GetWorkerBootstrapOptionsResponseBodyDataNetworkOptions },
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

export class GetWorkerBootstrapOptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: GetWorkerBootstrapOptionsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * 473469C7-XX-XX-XX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWorkerBootstrapOptionsResponseBodyData,
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

