// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConsumerAPIKeysOutput } from "./ListConsumerApikeysOutput";


export class ListConsumerAPIKeysResult extends $dara.Model {
  /**
   * @remarks
   * The request status. `SUCCESS` indicates that the request was successful. Otherwise, this field returns the error type.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The list of consumer API keys.
   * 
   * @example
   * {}
   */
  data?: ListConsumerAPIKeysOutput;
  /**
   * @remarks
   * The unique request ID. Use this ID for issue tracking.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConsumerAPIKeysOutput,
      requestId: 'string',
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

