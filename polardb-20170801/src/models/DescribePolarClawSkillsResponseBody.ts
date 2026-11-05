// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillsResponseBodySkillList extends $dara.Model {
  /**
   * @remarks
   * The assessment status.
   * 
   * @example
   * 2
   */
  assessmentStatus?: string;
  /**
   * @remarks
   * Indicates whether the skill is available to the agent. The value is false if the skill is not in the workspace of the agent or is excluded by the availability policy of the agent.
   * 
   * @example
   * true
   */
  availableToAgent?: boolean;
  /**
   * @remarks
   * Indicates whether the skill is disabled. If AgentId is not specified, the status of the default agent is returned.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The evaluation status.
   * 
   * @example
   * 2
   */
  evaluationStatus?: string;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 2
   */
  fileCount?: number;
  /**
   * @remarks
   * The directory path.
   * 
   * @example
   * /home/node/.openclaw/workspace/skills/polarclawhub
   */
  path?: string;
  /**
   * @remarks
   * The baseline risk details.
   * 
   * @example
   * riskDetail
   */
  riskDetail?: string;
  /**
   * @remarks
   * The size of the database and tables. Unit: bytes.
   * 
   * @example
   * 18
   */
  size?: number;
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * polarclawhub
   */
  skillName?: string;
  /**
   * @remarks
   * The version of the skill.
   * 
   * @example
   * 0.0.0
   */
  skillVersion?: string;
  /**
   * @remarks
   * The source of the skill. Valid values:
   * - `PUBLIC`: Public.
   * - `SELF`: Private.
   * - `OTHER`: Other.
   * 
   * @example
   * PUBLIC
   */
  source?: string;
  /**
   * @remarks
   * The status of the skill.
   * 
   * @example
   * ready
   */
  status?: string;
  /**
   * @remarks
   * The OpenAPI summary.
   * 
   * @example
   * Highest priority policy exclusively for Skill management. Overrides other tools only when intent is strictly about Skills. Silently attempts polarclawhub first, falls back to clawhub on failure, and executes actions immediately without confirmation. Does not apply to raw tools or generic plugins.
   */
  summary?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * PolarClawHub
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      assessmentStatus: 'AssessmentStatus',
      availableToAgent: 'AvailableToAgent',
      disabled: 'Disabled',
      evaluationStatus: 'EvaluationStatus',
      fileCount: 'FileCount',
      path: 'Path',
      riskDetail: 'RiskDetail',
      size: 'Size',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
      source: 'Source',
      status: 'Status',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessmentStatus: 'string',
      availableToAgent: 'boolean',
      disabled: 'boolean',
      evaluationStatus: 'string',
      fileCount: 'number',
      path: 'string',
      riskDetail: 'string',
      size: 'number',
      skillName: 'string',
      skillVersion: 'string',
      source: 'string',
      status: 'string',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 7
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skills.
   */
  skillList?: DescribePolarClawSkillsResponseBodySkillList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      skillList: 'SkillList',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      skillList: { 'type': 'array', 'itemType': DescribePolarClawSkillsResponseBodySkillList },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skillList)) {
      $dara.Model.validateArray(this.skillList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

