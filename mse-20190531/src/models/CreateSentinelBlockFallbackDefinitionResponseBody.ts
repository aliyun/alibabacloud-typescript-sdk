// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSentinelBlockFallbackDefinitionResponseBodyData extends $dara.Model {
  /**
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * {"webRespStatusCode":429,"webRespMessage":"test","webFallbackMode":0,"webRespContentType":0}
   */
  fallbackBehavior?: string;
  /**
   * @example
   * 34726
   */
  id?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  resourceClassification?: number;
  /**
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      fallbackBehavior: 'FallbackBehavior',
      id: 'Id',
      name: 'Name',
      namespace: 'Namespace',
      resourceClassification: 'ResourceClassification',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      fallbackBehavior: 'string',
      id: 'number',
      name: 'string',
      namespace: 'string',
      resourceClassification: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSentinelBlockFallbackDefinitionResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateSentinelBlockFallbackDefinitionResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * ADDD8AB7-8D1C-4697-A83E-410D2607****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      code: 'number',
      data: CreateSentinelBlockFallbackDefinitionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

