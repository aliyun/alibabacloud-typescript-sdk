// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawSkillResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Skill.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The environment variable configuration.
   */
  env?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      env: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.env) {
      $dara.Model.validateMap(this.env);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawSkillResponseBody extends $dara.Model {
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
   * The updated Skill configuration. Sensitive values are masked.
   */
  config?: UpdatePolarClawSkillResponseBodyConfig;
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
   * Indicates whether the operation is successful.
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
   * The Skill identifier key.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  skillKey?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      config: 'Config',
      message: 'Message',
      ok: 'Ok',
      requestId: 'RequestId',
      skillKey: 'SkillKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      config: UpdatePolarClawSkillResponseBodyConfig,
      message: 'string',
      ok: 'boolean',
      requestId: 'string',
      skillKey: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

