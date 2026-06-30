// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPolarClawSkillRequest extends $dara.Model {
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
   * Specifies whether to force a reinstallation.
   * 
   * @example
   * true
   */
  force?: boolean;
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
   * The Skill identifier.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  slug?: string;
  /**
   * @remarks
   * The source.
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
      applicationId: 'ApplicationId',
      force: 'Force',
      skillVersion: 'SkillVersion',
      slug: 'Slug',
      source: 'Source',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      force: 'boolean',
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

