// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the model operator instance.
   * 
   * @example
   * pm-2zo88***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2035638*******
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

