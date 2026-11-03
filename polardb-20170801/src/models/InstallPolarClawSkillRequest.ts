// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPolarClawSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The target agent in the workspace. If not specified, the default agent is used.
   * 
   * @example
   * test1
   */
  agentId?: string;
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
   * Specifies whether to force reinstallation.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The scope. Valid values: workspace (default) and global (shared directory). This parameter is mutually exclusive with AgentId.
   * 
   * @example
   * global
   */
  scope?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.2.0
   */
  skillVersion?: string;
  /**
   * @remarks
   * The skill identifier.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  slug?: string;
  /**
   * @remarks
   * The source. Default value: polarhub.
   * 
   * @example
   * clawhub
   */
  source?: string;
  /**
   * @remarks
   * URL
   * 
   * @example
   * https://example.com/skill.tar.gz
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      force: 'Force',
      scope: 'Scope',
      skillVersion: 'SkillVersion',
      slug: 'Slug',
      source: 'Source',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      force: 'boolean',
      scope: 'string',
      skillVersion: 'string',
      slug: 'string',
      source: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

