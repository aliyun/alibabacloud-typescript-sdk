// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task creation time in ISO 8601 UTC format.
   * 
   * @example
   * string_value
   */
  createdAt?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The asynchronous task ID, used for querying with getSkillRun.
   * 
   * @example
   * exampleRunId
   */
  runId?: string;
  /**
   * @remarks
   * The skill code that was actually executed.
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * string_value
   */
  skillName?: string;
  /**
   * @remarks
   * The task status. Returns Running immediately upon submission.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createdAt: 'createdAt',
      message: 'message',
      requestId: 'requestId',
      runId: 'runId',
      skillCode: 'skillCode',
      skillName: 'skillName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createdAt: 'string',
      message: 'string',
      requestId: 'string',
      runId: 'string',
      skillCode: 'string',
      skillName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

