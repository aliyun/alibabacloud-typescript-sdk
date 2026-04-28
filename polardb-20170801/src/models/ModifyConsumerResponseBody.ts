// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConsumerResponseBody extends $dara.Model {
  /**
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
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

