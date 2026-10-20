// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOptimizeTasksResponseBodyOptimizeTasks extends $dara.Model {
  /**
   * @remarks
   * The scheduling checkpoint that stores states such as the general scheduling watermark.
   */
  checkpoint?: { [key: string]: any };
  /**
   * @remarks
   * The type-specific configuration. For ExperienceMining and SkillOptimize, optional prompts support only inline Markdown, and the body is stored in inputs.prompt.content (non-empty UTF-8, up to 16 KiB).
   * 
   * @example
   * {"ioVersion":2,"inputs":{"experienceLibrary":{"type":"dataset","dataset":"experiences"},"trajectory":{"type":"sls","project":"my-project","logstore":"agent-trajectory","format":"atif"},"prompt":{"type":"inline","format":"markdown","content":"# Guidance\\\\nExtract evidence-backed tool contracts."}},"outputs":{"changePlan":{"type":"dataset","dataset":"experience-plans"}},"operators":["tool_contract"],"application":{"mode":"manual"}}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-12T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The next scheduling trigger time.
   * 
   * @example
   * 2026-08-13T16:00:00Z
   */
  nextTriggerTime?: string;
  /**
   * @remarks
   * The name of the optimization task.
   * 
   * @example
   * efficiency-analysis
   */
  optimizeTaskName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The type of the optimization task. Valid values: ExperienceMining, SkillOptimize, EfficiencyAnalysis, SOPGeneration, EvalMining, PolicyMining, and AssetMining.
   * 
   * @example
   * EfficiencyAnalysis
   */
  type?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-08-12T10:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'checkpoint',
      config: 'config',
      createTime: 'createTime',
      nextTriggerTime: 'nextTriggerTime',
      optimizeTaskName: 'optimizeTaskName',
      regionId: 'regionId',
      status: 'status',
      type: 'type',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      nextTriggerTime: 'string',
      optimizeTaskName: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.checkpoint) {
      $dara.Model.validateMap(this.checkpoint);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOptimizeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of optimization tasks.
   */
  optimizeTasks?: ListOptimizeTasksResponseBodyOptimizeTasks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      optimizeTasks: 'optimizeTasks',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      optimizeTasks: { 'type': 'array', 'itemType': ListOptimizeTasksResponseBodyOptimizeTasks },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.optimizeTasks)) {
      $dara.Model.validateArray(this.optimizeTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

