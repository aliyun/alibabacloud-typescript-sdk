// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentSandboxInfo } from "./AgentSandboxInfo";


export class AgentPlatformJob extends $dara.Model {
  /**
   * @remarks
   * The ID of the AP task.
   * 
   * @example
   * agent-job-example
   */
  agentJobId?: string;
  /**
   * @remarks
   * The attempt number of the current task.
   * 
   * @example
   * 0
   */
  attempt?: number;
  /**
   * @remarks
   * The creation time in UTC RFC3339 format.
   * 
   * @example
   * 2026-10-30T06:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The execution duration of the current attempt in milliseconds. This value is returned only when the task is in a terminal state and both the completion time and execution duration are valid. Otherwise, null is returned.
   * 
   * @example
   * 1250
   * 
   * **if can be null:**
   * true
   */
  durationMs?: number;
  /**
   * @remarks
   * The completion time in UTC RFC3339 format. Returns null if the task is not in a terminal state or the completion time is invalid.
   * 
   * @example
   * 2026-10-30T06:00:01.250Z
   * 
   * **if can be null:**
   * true
   */
  finishedAt?: string;
  /**
   * @remarks
   * The ID of the AP task instance.
   * 
   * @example
   * sample-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the DLC job to which the task belongs.
   * 
   * @example
   * dlc5yfk7eyg95lac
   */
  jobId?: string;
  /**
   * @remarks
   * The sandbox ID of the current attempt. Returns null if no matching information is found.
   * 
   * @example
   * sandbox-example
   * 
   * **if can be null:**
   * true
   */
  sandboxId?: string;
  /**
   * @remarks
   * The sandbox resource summary of the current attempt. Returns null if no matching information is found.
   * 
   * **if can be null:**
   * true
   */
  sandboxInfo?: AgentSandboxInfo;
  /**
   * @remarks
   * The status of the AP task.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The AP task tags, returned in the original content and order. Returns [] if the value is missing, null, or an empty array.
   * 
   * @example
   * ["scenario:swe"]
   */
  tags?: string[];
  /**
   * @remarks
   * The name of the AP template.
   * 
   * @example
   * swe-bench
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      agentJobId: 'AgentJobId',
      attempt: 'Attempt',
      createdAt: 'CreatedAt',
      durationMs: 'DurationMs',
      finishedAt: 'FinishedAt',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      sandboxId: 'SandboxId',
      sandboxInfo: 'SandboxInfo',
      status: 'Status',
      tags: 'Tags',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentJobId: 'string',
      attempt: 'number',
      createdAt: 'string',
      durationMs: 'number',
      finishedAt: 'string',
      instanceId: 'string',
      jobId: 'string',
      sandboxId: 'string',
      sandboxInfo: AgentSandboxInfo,
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      template: 'string',
    };
  }

  validate() {
    if(this.sandboxInfo && typeof (this.sandboxInfo as any).validate === 'function') {
      (this.sandboxInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

