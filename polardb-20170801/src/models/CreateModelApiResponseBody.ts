// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The invocation endpoint.
   * 
   * @example
   * xxx
   */
  invokeEndpoint?: string;
  /**
   * @remarks
   * The model API ID.
   * 
   * @example
   * mi-xxxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @remarks
   * The model API status.
   * 
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

