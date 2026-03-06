// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOwnRequestLogRequest extends $dara.Model {
  /**
   * @remarks
   * The request ID of the log to query. The ID is the unique identifier (UUID) of an API request and must be in uppercase.
   * 
   * This parameter is required.
   * 
   * @example
   * 123E4567-E89B-12D3-A456-426614174000
   */
  logRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      logRequestId: 'logRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

