// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConsumerAPIKeyOutput } from "./CreateConsumerApikeyOutput";


export class CreateConsumerAPIKeyResult extends $dara.Model {
  /**
   * @remarks
   * `SUCCESS` for a successful operation; otherwise, the corresponding error type.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Details of the new consumer API key, including the complete key.
   * 
   * @example
   * {}
   */
  data?: CreateConsumerAPIKeyOutput;
  /**
   * @remarks
   * A unique request id for issue tracking.
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
      data: CreateConsumerAPIKeyOutput,
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

