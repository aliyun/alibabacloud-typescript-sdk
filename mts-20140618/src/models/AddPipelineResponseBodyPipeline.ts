// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddPipelineResponseBodyPipelineNotifyConfig } from "./AddPipelineResponseBodyPipelineNotifyConfig";


export class AddPipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The ID of the MPS queue.
   * 
   * @example
   * ed450ea0bfbd41e29f80a401fb4d****
   */
  id?: string;
  /**
   * @remarks
   * The name of the MPS queue.
   * 
   * @example
   * Media Fingerprint
   */
  name?: string;
  /**
   * @remarks
   * The MNS configuration.
   */
  notifyConfig?: AddPipelineResponseBodyPipelineNotifyConfig;
  /**
   * @remarks
   * The quota that is allocated to the MPS queue.
   * 
   * @example
   * 10
   */
  quotaAllocate?: number;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * AliyunMTSDefaultRole
   */
  role?: string;
  /**
   * @remarks
   * The type of the MPS queue.
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The level of the MPS queue.
   * 
   * @example
   * 1
   */
  speedLevel?: number;
  /**
   * @remarks
   * The state of the MPS queue.
   * 
   * *   Active: The MPS queue is active. The jobs in the MPS queue are scheduled and transcoded by MPS.
   * *   Paused: The MPS queue is paused. Jobs in the MPS queue are no longer scheduled for transcoding by MPS. All of the jobs in the MPS queue remain in the Submitted state. Jobs that are being transcoded are not affected.
   * 
   * @example
   * Active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      quotaAllocate: 'QuotaAllocate',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      notifyConfig: AddPipelineResponseBodyPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
      state: 'string',
    };
  }

  validate() {
    if(this.notifyConfig && typeof (this.notifyConfig as any).validate === 'function') {
      (this.notifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

