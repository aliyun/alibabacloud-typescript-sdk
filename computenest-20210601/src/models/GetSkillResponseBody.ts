// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBodyLocales extends $dara.Model {
  /**
   * @example
   * AI Skill Creation and Optimization
   */
  enValue?: string;
  /**
   * @example
   * AI 技能创建与优化
   */
  originalValue?: string;
  /**
   * @example
   * AI 技能创建与优化
   */
  zhValue?: string;
  static names(): { [key: string]: string } {
    return {
      enValue: 'EnValue',
      originalValue: 'OriginalValue',
      zhValue: 'ZhValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enValue: 'string',
      originalValue: 'string',
      zhValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * **if can be null:**
   * true
   */
  locales?: GetSkillResponseBodyLocales[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  /**
   * @remarks
   * The set of connection types that the Skill depends on.
   */
  requiredConnections?: string[];
  /**
   * @remarks
   * The security scan status of the source file.
   */
  securityScanStatus?: string;
  /**
   * @remarks
   * The security scan remediation suggestions (a Markdown-formatted string containing a set of remediation suggestions). This value is meaningful only when the source file security scan status is BLOCK.
   * 
   * @example
   * #### <span style=\\"color:#2563eb\\"> System Shutdown Command</span>\\n- <span style=\\"color:#16a34a\\">✅</span> Add an explicit user confirmation requirement before executing the `reboot-instance` command, and document that the restart will cause service interruption.\\n\\n#### <span style=\\"color:#2563eb\\"> Privilege Escalation Operation</span>\\n- <span style=\\"color:#16a34a\\">✅</span> Document that `sudo` is required, and provide installation alternatives that do not rely on root privileges (such as user local directories or package managers).\\n\\n#### <span style=\\"color:#2563eb\\"> Hardcoded Access Keys</span>\\n- <span style=\\"color:#16a34a\\">✅</span> Replace realistic example credentials with obvious placeholders (such as `<your-access-key-id>`) to avoid confusion with real credentials.\\n\\n#### <span style=\\"color:#2563eb\\"> User Deception (Direct Execution of Remote Scripts)</span>\\n- <span style=\\"color:#16a34a\\">✅</span> Immediately remove the `curl | bash` pattern. Instead, download the script first, verify its integrity (checksum/signature), and then execute it: `curl -fsSL url -o script.sh && bash script.sh`
   */
  securityScanSuggestions?: string;
  /**
   * @remarks
   * The description of the Skill.
   * 
   * @example
   * Create new skills, modify and improve existing skills, and measure skill performance.
   */
  skillDescription?: string;
  /**
   * @remarks
   * The display name of the Skill.
   * 
   * @example
   * AI 技能创建与优化
   */
  skillDisplayName?: string;
  /**
   * @remarks
   * Skill ID
   * 
   * @example
   * s-xxxxx
   */
  skillId?: string;
  /**
   * @remarks
   * The set of labels for the Skill.
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The name of the Skill.
   * 
   * @example
   * skill-creator
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the SkillSpace to which the Skill belongs.
   * 
   * @example
   * ss-xxxxx
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      locales: 'Locales',
      requestId: 'RequestId',
      requiredConnections: 'RequiredConnections',
      securityScanStatus: 'SecurityScanStatus',
      securityScanSuggestions: 'SecurityScanSuggestions',
      skillDescription: 'SkillDescription',
      skillDisplayName: 'SkillDisplayName',
      skillId: 'SkillId',
      skillLabels: 'SkillLabels',
      skillName: 'SkillName',
      skillSpaceId: 'SkillSpaceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      locales: { 'type': 'array', 'itemType': GetSkillResponseBodyLocales },
      requestId: 'string',
      requiredConnections: { 'type': 'array', 'itemType': 'string' },
      securityScanStatus: 'string',
      securityScanSuggestions: 'string',
      skillDescription: 'string',
      skillDisplayName: 'string',
      skillId: 'string',
      skillLabels: { 'type': 'array', 'itemType': 'string' },
      skillName: 'string',
      skillSpaceId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.locales)) {
      $dara.Model.validateArray(this.locales);
    }
    if(Array.isArray(this.requiredConnections)) {
      $dara.Model.validateArray(this.requiredConnections);
    }
    if(Array.isArray(this.skillLabels)) {
      $dara.Model.validateArray(this.skillLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

