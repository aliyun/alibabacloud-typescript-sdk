// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawSkillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Skill API key. An empty string indicates that the key is deleted.
   * 
   * @example
   * my-api
   */
  apiKey?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
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
   * The environment variables as a key-value map. A null value indicates that the variable is deleted.
   * 
   * @example
   * {"NETA_TOKEN":"my-token"}
   */
  envShrink?: string;
  /**
   * @remarks
   * The Skill identifier key.
   * 
   * This parameter is required.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  skillKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      applicationId: 'ApplicationId',
      enabled: 'Enabled',
      envShrink: 'Env',
      skillKey: 'SkillKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      applicationId: 'string',
      enabled: 'boolean',
      envShrink: 'string',
      skillKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

