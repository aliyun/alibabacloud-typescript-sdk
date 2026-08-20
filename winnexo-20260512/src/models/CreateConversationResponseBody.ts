// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConversationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3a59769c-e631-4b48-84f3-c9bf3a8ae940
   */
  conversationId?: string;
  /**
   * @remarks
   * The time when the share was created.
   * 
   * @example
   * 1784513941206
   */
  createdAt?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * A reserved field for extension use.
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5241B90-8FF4-565C-977A-0CE1842AED72
   */
  requestId?: string;
  /**
   * @remarks
   * The appointment title.
   * 
   * @example
   * Incident RCA: alert-0885feb7-3d4b-4da5-90f0-0119dfbbf555:up0shc25tp0kueo0afeobvhk81
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      conversationId: 'conversationId',
      createdAt: 'createdAt',
      message: 'message',
      metadata: 'metadata',
      requestId: 'requestId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      conversationId: 'string',
      createdAt: 'string',
      message: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      title: 'string',
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

