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
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
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
   * The identifier of the installed Skill.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  slug?: string;
  /**
   * @remarks
   * The installation directory.
   * 
   * @example
   * /home/node/.openclaw/skills/alibacloud-rds-copilot
   */
  targetDir?: string;
  /**
   * @remarks
   * The version number of the installed Skill.
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
      requestId: 'RequestId',
      slug: 'Slug',
      targetDir: 'TargetDir',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      requestId: 'string',
      slug: 'string',
      targetDir: 'string',
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

