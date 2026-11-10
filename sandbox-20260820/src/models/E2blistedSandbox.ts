// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BListedSandboxResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * demo
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class E2BListedSandbox extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @remarks
   * The ephemeral disk size.
   * 
   * @example
   * 10240
   */
  diskSizeMB?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-09-03T02:06:37.932Z
   */
  endAt?: string;
  /**
   * @remarks
   * The sandbox version.
   * 
   * @example
   * 2
   */
  generation?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 2
   */
  memoryMB?: number;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The resource tags.
   */
  resourceTags?: E2BListedSandboxResourceTags[];
  /**
   * @remarks
   * The sandbox ID.
   * 
   * @example
   * sbx-xxxx
   */
  sandboxID?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * 0d66****b374
   */
  snapshotID?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-09-03T02:05:37.932Z
   */
  startedAt?: string;
  /**
   * @remarks
   * The sandbox state. Valid values:
   * - running: Running.
   * - pausing: Pausing.
   * - paused: Paused.
   * - resuming: Resuming.
   * - pause_fail: Pause failed.
   * - resume_fail: Resume failed.
   * - snapshotting: Creating a snapshot.
   * - snapshot_failed: Snapshot creation failed.
   * - terminated: Terminated.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 9f5a1fe9-****
   */
  teamID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * default
   */
  teamName?: string;
  /**
   * @remarks
   * The QoS version.
   * 
   * @example
   * eco
   */
  teamPlan?: string;
  /**
   * @remarks
   * The unique identifier of the template.
   * 
   * @example
   * f1l97phhfw6ox18iwcfk
   */
  templateID?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * base
   */
  templateName?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 2000****
   */
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'cpuCount',
      diskSizeMB: 'diskSizeMB',
      endAt: 'endAt',
      generation: 'generation',
      memoryMB: 'memoryMB',
      metadata: 'metadata',
      resourceGroupID: 'resourceGroupID',
      resourceTags: 'resourceTags',
      sandboxID: 'sandboxID',
      snapshotID: 'snapshotID',
      startedAt: 'startedAt',
      state: 'state',
      teamID: 'teamID',
      teamName: 'teamName',
      teamPlan: 'teamPlan',
      templateID: 'templateID',
      templateName: 'templateName',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      diskSizeMB: 'number',
      endAt: 'string',
      generation: 'number',
      memoryMB: 'number',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceGroupID: 'string',
      resourceTags: { 'type': 'array', 'itemType': E2BListedSandboxResourceTags },
      sandboxID: 'string',
      snapshotID: 'string',
      startedAt: 'string',
      state: 'string',
      teamID: 'string',
      teamName: 'string',
      teamPlan: 'string',
      templateID: 'string',
      templateName: 'string',
      userID: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

