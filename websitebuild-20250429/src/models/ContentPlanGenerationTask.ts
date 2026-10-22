// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContentPlanGenerationTaskAnalysisModules extends $dara.Model {
  /**
   * @remarks
   * The module content.
   * 
   * @example
   * The current brand mention rate in the AI website builder category is lower than the industry average, and user perception is mostly focused on pricing
   */
  content?: string;
  /**
   * @remarks
   * The key questions.
   */
  keyQuestions?: string[];
  /**
   * @remarks
   * The module title.
   * 
   * @example
   * Current status of brand awareness
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      keyQuestions: 'KeyQuestions',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      keyQuestions: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keyQuestions)) {
      $dara.Model.validateArray(this.keyQuestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentPlanGenerationTaskAnalysis extends $dara.Model {
  /**
   * @remarks
   * The analysis modules.
   */
  modules?: ContentPlanGenerationTaskAnalysisModules[];
  /**
   * @remarks
   * The reference article writing guidelines, which include only structure and perspective, excluding third-party facts.
   */
  referenceWritingNotes?: string[];
  /**
   * @remarks
   * The analysis summary.
   * 
   * @example
   * Insufficient brand awareness is the current main shortcoming. It is recommended to prioritize adding content related to product capabilities
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      modules: 'Modules',
      referenceWritingNotes: 'ReferenceWritingNotes',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modules: { 'type': 'array', 'itemType': ContentPlanGenerationTaskAnalysisModules },
      referenceWritingNotes: { 'type': 'array', 'itemType': 'string' },
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    if(Array.isArray(this.referenceWritingNotes)) {
      $dara.Model.validateArray(this.referenceWritingNotes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentPlanGenerationTask extends $dara.Model {
  /**
   * @remarks
   * The analysis conclusions, returned only after the analysis task succeeds.
   */
  analysis?: ContentPlanGenerationTaskAnalysis;
  /**
   * @remarks
   * The ID of the analysis task on which the scheduling task is based.
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
   * The ID of the GEO diagnostic task used by the analysis node.
   * 
   * @example
   * 1f2e3d4c-5b6a-4798-8a9b-c0d1e2f3a4b5
   */
  diagnosisTaskId?: string;
  /**
   * @remarks
   * The error code for the failure.
   * 
   * @example
   * CONTENT_PLAN_AGENT_TIMEOUT
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message for the failure.
   * 
   * @example
   * Content plan generation timed out. Please try again later
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the content plan generated after the scheduling task succeeds.
   * 
   * @example
   * plan_3f7a1c2e9b7d4a5f8c0e1d2b3a4c5d6e
   */
  planId?: string;
  /**
   * @remarks
   * The task progress, ranging from 0 to 10000.
   * 
   * @example
   * 10000
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the workspace, which refers to the GEO workspace for brand marketing, namely the appWorkspaceId.
   * 
   * @example
   * d4e5f60718293a4b5c6d7e8f90a1b2c3
   */
  projectId?: string;
  /**
   * @remarks
   * The workspace configuration version on which the diagnostic report is based. The analysis, scheduling, and article generation processes always read this version.
   * 
   * @example
   * 12
   */
  reportConfigRevision?: number;
  /**
   * @remarks
   * Indicates whether the diagnostic report is generated based on an outdated configuration. If the value is true, the frontend should prompt the user.
   * 
   * @example
   * false
   */
  staleConfig?: boolean;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * The submission time, in milliseconds.
   * 
   * @example
   * 1735660800000
   */
  submittedAt?: number;
  /**
   * @remarks
   * The ID of the generation task.
   * 
   * @example
   * cpt_9b7d4a5f8c0e1d2b3a4c5d6e3f7a1c2e
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values: ANALYSIS and SCHEDULE.
   * 
   * @example
   * SCHEDULE
   */
  taskType?: string;
  /**
   * @remarks
   * The last update time, in milliseconds.
   * 
   * @example
   * 1735660900000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      analysisTaskId: 'AnalysisTaskId',
      configRevision: 'ConfigRevision',
      diagnosisTaskId: 'DiagnosisTaskId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      planId: 'PlanId',
      progress: 'Progress',
      projectId: 'ProjectId',
      reportConfigRevision: 'ReportConfigRevision',
      staleConfig: 'StaleConfig',
      status: 'Status',
      submittedAt: 'SubmittedAt',
      taskId: 'TaskId',
      taskType: 'TaskType',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ContentPlanGenerationTaskAnalysis,
      analysisTaskId: 'string',
      configRevision: 'number',
      diagnosisTaskId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      planId: 'string',
      progress: 'number',
      projectId: 'string',
      reportConfigRevision: 'number',
      staleConfig: 'boolean',
      status: 'string',
      submittedAt: 'number',
      taskId: 'string',
      taskType: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

