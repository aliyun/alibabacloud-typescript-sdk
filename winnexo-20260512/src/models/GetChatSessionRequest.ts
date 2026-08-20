// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of resources to return. If not specified, the default value is 20. The maximum value is 100. The actual number of returned results may be less than the specified value but will not exceed it.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The SessionId value to filter by. If specified, all Active/Expired status information associated with this session is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
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

