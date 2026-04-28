// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelApiResponseBody extends $dara.Model {
  /**
   * @example
   * xxx
   */
  invokeEndpoint?: string;
  /**
   * @example
   * mi-xxxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      invokeEndpoint: 'InvokeEndpoint',
      modelApiId: 'ModelApiId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeEndpoint: 'string',
      modelApiId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

