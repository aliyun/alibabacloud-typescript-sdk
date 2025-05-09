// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Database } from "./Database";


export class GetDatabaseResponseBody extends $dara.Model {
  database?: Database;
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: Database,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.database && typeof (this.database as any).validate === 'function') {
      (this.database as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

