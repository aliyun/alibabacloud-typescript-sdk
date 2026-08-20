// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatSessionResponseBodySession extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1
   */
  createdAt?: number;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * exampleId
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the creation time exceeds 30 days.
   * 
   * @example
   * true
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The associated object ID.
   * 
   * @example
   * exampleObjectId
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The abstract model name used by the session (quick/standard/flagship).
   * 
   * @example
   * string_value
   */
  model?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * string_value
   */
  object?: string;
  /**
   * @remarks
   * The associated object ID.
   * 
   * @example
   * 2676
   */
  objectId?: string;
  /**
   * @remarks
   * The operating object name.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string[];
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Sample title
   */
  title?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      isExpired: 'isExpired',
      metadata: 'metadata',
      model: 'model',
      object: 'object',
      objectId: 'objectId',
      operatingObjectName: 'operatingObjectName',
      title: 'title',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'string',
      isExpired: 'boolean',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: 'string',
      object: 'string',
      objectId: 'string',
      operatingObjectName: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.operatingObjectName)) {
      $dara.Model.validateArray(this.operatingObjectName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChatSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description. This is empty when the request is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   */
  session?: UpdateChatSessionResponseBodySession;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      session: UpdateChatSessionResponseBodySession,
    };
  }

  validate() {
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

