// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Node ID
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticNetworkInterfaceResponseBody extends $dara.Model {
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
  content?: DeleteElasticNetworkInterfaceResponseBodyContent;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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
      content: DeleteElasticNetworkInterfaceResponseBodyContent,
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

