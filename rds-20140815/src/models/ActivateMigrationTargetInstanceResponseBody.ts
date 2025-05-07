// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateMigrationTargetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the destination instance.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 76364A52-E0AB-5CC8-9818-CF1DC482C092
   */
  requestId?: string;
  /**
   * @remarks
   * The private IP address that is used to connect to the self-managed PostgreSQL instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The port number that is used to connect to the self-managed PostgreSQL instance.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The ID of the identification task.
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

