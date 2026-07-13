// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerBootstrapOptionsResponseBodyDataNetworkOptions extends $dara.Model {
  available?: boolean;
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
  instanceId?: string;
  name?: string;
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
  code?: string;
  data?: GetWorkerBootstrapOptionsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

