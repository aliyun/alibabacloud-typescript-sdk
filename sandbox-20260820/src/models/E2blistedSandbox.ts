// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BListedSandbox extends $dara.Model {
  /**
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @example
   * 10240
   */
  diskSizeMB?: number;
  /**
   * @example
   * 2026-09-03T02:06:37.932Z
   */
  endAt?: string;
  /**
   * @example
   * 2
   */
  generation?: number;
  /**
   * @example
   * 2
   */
  memoryMB?: number;
  metadata?: { [key: string]: string };
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @example
   * sbx-xxxx
   */
  sandboxID?: string;
  /**
   * @example
   * 2026-09-03T02:05:37.932Z
   */
  startedAt?: string;
  /**
   * @example
   * running
   */
  state?: string;
  /**
   * @example
   * 9f5a1fe9-****
   */
  teamID?: string;
  /**
   * @example
   * default
   */
  teamName?: string;
  /**
   * @example
   * eco
   */
  teamPlan?: string;
  /**
   * @example
   * f1l97phhfw6ox18iwcfk
   */
  templateID?: string;
  /**
   * @example
   * base
   */
  templateName?: string;
  /**
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
      sandboxID: 'sandboxID',
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
      sandboxID: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

