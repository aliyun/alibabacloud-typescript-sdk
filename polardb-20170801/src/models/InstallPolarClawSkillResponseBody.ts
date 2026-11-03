// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPolarClawSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. This parameter is returned when Async is set to false.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * The operation name. This parameter is returned when Async is set to true.
   * 
   * @example
   * InstallPolarClawSkill
   */
  operation?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The identifier of the installed skill. This parameter is returned during synchronous execution.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  slug?: string;
  /**
   * @remarks
   * The initial state of the task. This parameter is returned when Async is set to true.
   * 
   * @example
   * pending
   */
  state?: string;
  /**
   * @remarks
   * The installation directory. This parameter is returned during synchronous execution.
   * 
   * @example
   * /home/node/.openclaw/skills/alibacloud-rds-copilot
   */
  targetDir?: string;
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is returned when Async is set to true.
   * 
   * @example
   * 9f1c2e3d-xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The installed version number. This parameter is returned during synchronous execution.
   * 
   * @example
   * 1.2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      ok: 'Ok',
      operation: 'Operation',
      requestId: 'RequestId',
      slug: 'Slug',
      state: 'State',
      targetDir: 'TargetDir',
      taskId: 'TaskId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      operation: 'string',
      requestId: 'string',
      slug: 'string',
      state: 'string',
      targetDir: 'string',
      taskId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

