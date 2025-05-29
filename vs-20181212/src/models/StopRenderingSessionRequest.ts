// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRenderingSessionRequest extends $dara.Model {
  /**
   * @example
   * 04c30850-1d91-4da1-b811-66d0ee94af7d
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      projectId: 'ProjectId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      projectId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

