// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState extends $dara.Model {
  /**
   * @remarks
   * The reason for the last restart.
   * 
   * @example
   * OOMKilled
   */
  lastTerminatedReason?: string;
  /**
   * @remarks
   * The number of times that the container restarted.
   * 
   * @example
   * 1
   */
  restartCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTerminatedReason: 'LastTerminatedReason',
      restartCount: 'RestartCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTerminatedReason: 'string',
      restartCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

