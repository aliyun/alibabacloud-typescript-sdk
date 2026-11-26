// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentSandboxInfo extends $dara.Model {
  /**
   * @example
   * 2
   * 
   * **if can be null:**
   * true
   */
  CPUCount?: number;
  /**
   * @example
   * 2026-10-30T06:00:00.500Z
   */
  collectedAt?: string;
  /**
   * @example
   * 21474836480
   * 
   * **if can be null:**
   * true
   */
  diskTotal?: number;
  /**
   * @example
   * 4096
   * 
   * **if can be null:**
   * true
   */
  memoryMB?: number;
  static names(): { [key: string]: string } {
    return {
      CPUCount: 'CPUCount',
      collectedAt: 'CollectedAt',
      diskTotal: 'DiskTotal',
      memoryMB: 'MemoryMB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUCount: 'number',
      collectedAt: 'string',
      diskTotal: 'number',
      memoryMB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

