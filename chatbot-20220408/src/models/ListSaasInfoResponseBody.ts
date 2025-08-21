// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * GLOBAL_SERVICE
   */
  code?: string;
  /**
   * @example
   * GLOBAL SERVICE
   */
  enName?: string;
  name?: string;
  /**
   * @example
   * https://pre-alime4service.console.aliyun.com/?productCode=p_beebot_public&switchAgent=1204001&saasCode=Robot&saasToken=06614fdb-c72f-436e-8003-dfe8a2854a15&saasName=123#/robot
   */
  serviceUrl?: string;
  /**
   * @example
   * https://alime.console.aliyun.com/?productCode=p_beebot_public&switchAgent=1204001&saasCode=Robot&saasToken=06614fdb-c72f-436e-8003-dfe8a2854a15&saasName=123#/robot
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enName: 'EnName',
      name: 'Name',
      serviceUrl: 'ServiceUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enName: 'string',
      name: 'string',
      serviceUrl: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasInfoResponseBody extends $dara.Model {
  data?: ListSaasInfoResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A629A28F-F25E-5572-A679-FA46FB0151D6
   */
  requestId?: string;
  /**
   * @example
   * 06614fdb-c72f-436e-8003-dfe8a2854a15
   */
  saasToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      saasToken: 'SaasToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSaasInfoResponseBodyData },
      requestId: 'string',
      saasToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

