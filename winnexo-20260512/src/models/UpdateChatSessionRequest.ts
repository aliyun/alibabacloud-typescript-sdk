// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The abstract model name (model tier). If not specified, the current model of the session is not modified.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The new session title.
   * 
   * @example
   * Sample title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      sessionId: 'string',
      tenantId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

