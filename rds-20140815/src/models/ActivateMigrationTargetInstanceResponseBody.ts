// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateMigrationTargetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the target instance.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 76364A52-E0AB-5CC8-9818-CF1DC482C092
   */
  requestId?: string;
  /**
   * @remarks
   * The internal IP address of the self-managed PostgreSQL database.
   * 
   * @example
   * 172.16.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The port of the self-managed PostgreSQL database.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 440913675
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

