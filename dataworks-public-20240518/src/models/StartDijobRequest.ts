// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartDIJobRequestRealtimeStartSettings } from "./StartDijobRequestRealtimeStartSettings";


export class StartDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 10000
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * Specifies whether to forcefully rerun all synchronization steps. If you do not configure this parameter, the system does not perform the forcible rerun operation.
   * 
   * *   If the system does not perform the forcible rerun operation, only the steps that are not run start to run.
   * *   If the system performs the forcible rerun operation, all steps start to rerun.
   * 
   * @example
   * false
   */
  forceToRerun?: boolean;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 10000
   */
  id?: number;
  /**
   * @remarks
   * The settings for starting real-time synchronization.
   * 
   *     {
   *       "StartTime":1663765058
   *     }
   */
  realtimeStartSettings?: StartDIJobRequestRealtimeStartSettings;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      forceToRerun: 'ForceToRerun',
      id: 'Id',
      realtimeStartSettings: 'RealtimeStartSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      forceToRerun: 'boolean',
      id: 'number',
      realtimeStartSettings: StartDIJobRequestRealtimeStartSettings,
    };
  }

  validate() {
    if(this.realtimeStartSettings && typeof (this.realtimeStartSettings as any).validate === 'function') {
      (this.realtimeStartSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

