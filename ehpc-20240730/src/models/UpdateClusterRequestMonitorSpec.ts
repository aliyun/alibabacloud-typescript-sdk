// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterRequestMonitorSpec extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the monitoring component of compute nodes. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableComputeLoadMonitor?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableComputeLoadMonitor: 'EnableComputeLoadMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableComputeLoadMonitor: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

