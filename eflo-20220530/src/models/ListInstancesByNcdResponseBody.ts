// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesByNcdResponseBodyContentInstanceInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * lni-1235****
   */
  instanceId?: string;
  /**
   * @remarks
   * network communication distance
   * 
   * @example
   * 2
   */
  ncd?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ncd: 'Ncd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ncd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesByNcdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * A collection of instances whose network communication distance from the source instance ID does not exceed maxNcd
   */
  instanceInfos?: ListInstancesByNcdResponseBodyContentInstanceInfos[];
  /**
   * @remarks
   * Instance Type
   * 
   * Valid value:
   * 
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * 
   * @example
   * lni
   */
  instanceType?: string;
  /**
   * @remarks
   * Maximum communication distance between nodes
   * 
   * @example
   * 3
   */
  maxNcd?: number;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * lni-1234****
   */
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      instanceType: 'InstanceType',
      maxNcd: 'MaxNcd',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: { 'type': 'array', 'itemType': ListInstancesByNcdResponseBodyContentInstanceInfos },
      instanceType: 'string',
      maxNcd: 'number',
      sourceInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfos)) {
      $dara.Model.validateArray(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesByNcdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListInstancesByNcdResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:ListInstancesByNcd, arn=acs:eflo:cn-heyuan:1263399219805497:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListInstancesByNcdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

