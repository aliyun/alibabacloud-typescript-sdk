// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertDirectConversationToWorkRequest extends $dara.Model {
  /**
   * @remarks
   * The source direct session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

