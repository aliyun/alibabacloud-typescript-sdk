// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceNcdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Instance 1ID
   * 
   * @example
   * lni-1235****
   */
  instanceId1?: string;
  /**
   * @remarks
   * Instance 2ID
   * 
   * @example
   * lni-1234****
   */
  instanceId2?: string;
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
   * network communication distance between instances
   * 
   * @example
   * 1
   */
  ncd?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId1: 'InstanceId1',
      instanceId2: 'InstanceId2',
      instanceType: 'InstanceType',
      ncd: 'Ncd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId1: 'string',
      instanceId2: 'string',
      instanceType: 'string',
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

export class QueryInstanceNcdResponseBody extends $dara.Model {
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
  content?: QueryInstanceNcdResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:QueryInstanceNcd, arn=acs:eflo:cn-shenzhen:1263399219805497:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
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
      content: QueryInstanceNcdResponseBodyContent,
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

