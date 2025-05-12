// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePipelineResponseBodyPipelineNotifyConfig } from "./UpdatePipelineResponseBodyPipelineNotifyConfig";


export class UpdatePipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The ID of the MPS queue.
   * 
   * @example
   * d1ce4d3efcb549419193f50f1fcd****
   */
  id?: string;
  /**
   * @remarks
   * The new name of the MPS queue.
   * 
   * @example
   * example-pipeline-****
   */
  name?: string;
  /**
   * @remarks
   * The MNS configuration.
   */
  notifyConfig?: UpdatePipelineResponseBodyPipelineNotifyConfig;
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
   * The role that is assigned to the current RAM user.
   * 
   * @example
   * AliyunMTSExampleRole
   */
  role?: string;
  /**
   * @remarks
   * The type of the MPS queue. Default value: **Standard**. Valid values:
   * 
   * *   **Boost**: MPS queue with transcoding speed boosted
   * *   **Standard**: standard MPS queue
   * *   **NarrowBandHDV2**: MPS queue that supports Narrowband HD 2.0
   * *   **AIVideoCover**: MPS queue for intelligent snapshot capture
   * *   **AIVideoFPShot**: MPS queue for media fingerprinting
   * *   **AIVideoCensor**: MPS queue for automated review
   * *   **AIVideoMCU**: MPS queue for smart tagging
   * *   **AIVideoSummary**: MPS queue for video synopsis
   * *   **AIVideoPorn**: MPS queue for pornography detection in videos
   * *   **AIAudioKWS**: MPS queue for keyword recognition in audio
   * *   **AIAudioASR**: MPS queue for speech-to-text conversion
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The state of the MPS queue. Valid values:
   * 
   * *   **Active**: The MPS queue is active.
   * *   **Paused**: The MPS queue is paused.
   * 
   * @example
   * Paused
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
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      notifyConfig: UpdatePipelineResponseBodyPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
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

