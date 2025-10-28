// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 8b96ade0-0a07-****-af9d-5ed83640d076
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster ID. Valid values:
   * 
   * *   0: specifies the ID of the cluster in Enterprise Distributed Application Service (EDAS).
   * *   1: specifies the ID of the ACK cluster.
   * 
   * @example
   * 0
   */
  mode?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      mode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

