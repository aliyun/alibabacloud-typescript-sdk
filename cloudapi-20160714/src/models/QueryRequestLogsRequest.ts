// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRequestLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request log.
   * 
   * This parameter is required.
   * 
   * @example
   * 95657ED9-2F6F-426F-BD99-79C8********
   */
  requestLogId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestLogId: 'RequestLogId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestLogId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

