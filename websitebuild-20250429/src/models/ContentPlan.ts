// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContentPlan extends $dara.Model {
  /**
   * @remarks
   * The additional user comments.
   * 
   * @example
   * Highlight the differentiated capabilities of the product and avoid exaggerated claims
   */
  additionalRequirements?: string;
  /**
   * @remarks
   * The ID of the analysis task used for scheduling.
   * 
   * @example
   * cpt_1a2b3c4d5e6f708192a3b4c5d6e7f809
   */
  analysisTaskId?: string;
  /**
   * @remarks
   * The current configuration version of the workspace when the analysis is initiated.
   * 
   * @example
   * 12
   */
  configRevision?: number;
  /**
   * @remarks
   * The completion time of the GEO diagnosis, in milliseconds.
   * 
   * @example
   * 1735660800000
   */
  diagnosisCompletedAt?: number;
  /**
   * @remarks
   * The ID of the GEO diagnostic node.
   * 
   * @example
   * 1f2e3d4c-5b6a-4798-8a9b-c0d1e2f3a4b5
   */
  diagnosisTaskId?: string;
  /**
   * @remarks
   * The type of the GEO diagnosis.
   * 
   * @example
   * GEO_BRAND
   */
  diagnosisType?: string;
  /**
   * @remarks
   * The end date of the plan in the yyyy-MM-dd format.
   * 
   * @example
   * 2026-10-18
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the generation task.
   * 
   * @example
   * cpt_9b7d4a5f8c0e1d2b3a4c5d6e3f7a1c2e
   */
  generationTaskId?: string;
  /**
   * @remarks
   * The ID of the content plan.
   * 
   * @example
   * plan_3f7a1c2e9b7d4a5f8c0e1d2b3a4c5d6e
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the workspace, which is the GEO workspace for brand marketing and corresponds to the appWorkspaceId.
   * 
   * @example
   * d4e5f60718293a4b5c6d7e8f90a1b2c3
   */
  projectId?: string;
  /**
   * @remarks
   * The number of scheduled articles, which equals the number of matched generation days.
   * 
   * @example
   * 3
   */
  publishFrequency?: number;
  /**
   * @remarks
   * The workspace configuration version used for the diagnostic report, which is strictly read during article generation.
   * 
   * @example
   * 12
   */
  reportConfigRevision?: number;
  /**
   * @remarks
   * The start date of the plan in the yyyy-MM-dd format.
   * 
   * @example
   * 2026-10-12
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the plan. Valid values: ACTIVE, SUPERSEDED, COMPLETED, and FAILED.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The summary of the overall strategy for the plan.
   * 
   * @example
   * This week focuses on two themes: brand awareness and product capabilities, with a total of three articles
   */
  summary?: string;
  /**
   * @remarks
   * The ID of the new plan that supersedes the current plan.
   * 
   * @example
   * plan_7a1c2e9b7d4a5f8c0e1d2b3a4c5d6e3f
   */
  supersededBy?: string;
  /**
   * @remarks
   * The IANA time zone used for scheduling.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The weekly generation days, where ISO weekday 1 represents Monday and 7 represents Sunday.
   */
  weekdays?: number[];
  static names(): { [key: string]: string } {
    return {
      additionalRequirements: 'AdditionalRequirements',
      analysisTaskId: 'AnalysisTaskId',
      configRevision: 'ConfigRevision',
      diagnosisCompletedAt: 'DiagnosisCompletedAt',
      diagnosisTaskId: 'DiagnosisTaskId',
      diagnosisType: 'DiagnosisType',
      endDate: 'EndDate',
      generationTaskId: 'GenerationTaskId',
      planId: 'PlanId',
      projectId: 'ProjectId',
      publishFrequency: 'PublishFrequency',
      reportConfigRevision: 'ReportConfigRevision',
      startDate: 'StartDate',
      status: 'Status',
      summary: 'Summary',
      supersededBy: 'SupersededBy',
      timezone: 'Timezone',
      weekdays: 'Weekdays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalRequirements: 'string',
      analysisTaskId: 'string',
      configRevision: 'number',
      diagnosisCompletedAt: 'number',
      diagnosisTaskId: 'string',
      diagnosisType: 'string',
      endDate: 'string',
      generationTaskId: 'string',
      planId: 'string',
      projectId: 'string',
      publishFrequency: 'number',
      reportConfigRevision: 'number',
      startDate: 'string',
      status: 'string',
      summary: 'string',
      supersededBy: 'string',
      timezone: 'string',
      weekdays: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.weekdays)) {
      $dara.Model.validateArray(this.weekdays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

