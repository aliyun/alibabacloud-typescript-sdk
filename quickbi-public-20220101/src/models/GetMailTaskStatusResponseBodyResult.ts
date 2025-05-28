// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMailTaskStatusResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Execution time, in the format yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2024-10-09 17:34:11
   */
  execTime?: string;
  /**
   * @remarks
   * Mail ID
   * 
   * @example
   * c38f73f4c5*****c808c41b3f4d23b7852
   */
  mailId?: string;
  /**
   * @remarks
   * Mail status. Possible values:
   * 
   * - Success: SENT
   * - Failure: FAILED 
   * - In Progress: PROCESSING
   * 
   * @example
   * SENT
   */
  status?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 1282xxx610816
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      execTime: 'execTime',
      mailId: 'mailId',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execTime: 'string',
      mailId: 'string',
      status: 'string',
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

