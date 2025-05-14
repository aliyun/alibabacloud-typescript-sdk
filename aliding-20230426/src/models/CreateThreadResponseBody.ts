// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThreadResponseBody extends $dara.Model {
  /**
   * @example
   * 1642448000000
   */
  createAt?: number;
  /**
   * @example
   * threadId123
   */
  id?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * thread
   */
  object?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'createAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

