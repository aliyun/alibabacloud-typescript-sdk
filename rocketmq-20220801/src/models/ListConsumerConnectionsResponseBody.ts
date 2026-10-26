// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerConnectionsResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 172.17.135.197@17392#1936705963#551717232#9873695589062458
   */
  clientId?: string;
  /**
   * @remarks
   * The host IP address or Internet egress IP address.
   * 
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @remarks
   * The client hostname.
   * 
   * @example
   * vos
   */
  hostname?: string;
  /**
   * @remarks
   * The client language.
   * 
   * @example
   * java
   */
  language?: string;
  /**
   * @remarks
   * The consumption mode of the consumer:
   * 
   * - CLUSTERING
   * 
   * - LITE_SELECTIVE
   * 
   * - BROADCASTING
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      egressIp: 'egressIp',
      hostname: 'hostname',
      language: 'language',
      messageModel: 'messageModel',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      egressIp: 'string',
      hostname: 'string',
      language: 'string',
      messageModel: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of client connections.
   */
  connections?: ListConsumerConnectionsResponseBodyDataConnections[];
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'connections',
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConsumerConnectionsResponseBodyDataConnections },
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListConsumerConnectionsResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
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
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3620115-6F1F-5CFB-AA3F-BBD4853B2EC4
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
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConsumerConnectionsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

