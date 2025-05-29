// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingSessionRequest extends $dara.Model {
  /**
   * @example
   * d27c89d6-4fe3-4855-a89c-ea721c708b0b
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

