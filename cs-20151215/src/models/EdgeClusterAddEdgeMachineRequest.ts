// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EdgeClusterAddEdgeMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The timeout period of sessions. Unit: seconds.
   * 
   * @example
   * 1024
   */
  expired?: number;
  /**
   * @remarks
   * The node pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c26607f52179f4472a0d9723e7595****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The options that you want to configure.
   * 
   * @example
   * "{\\"enableIptables\\":true,\\"quiet\\":true,\\"manageRuntime\\":true,\\"allowedClusterAddons\\":[\\"kube-proxy\\",\\"flannel\\",\\"coredns\\"]}"
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      expired: 'expired',
      nodepoolId: 'nodepool_id',
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      nodepoolId: 'string',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

