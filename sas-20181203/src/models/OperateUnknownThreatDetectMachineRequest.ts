// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateUnknownThreatDetectMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **restart_study**: Restarts the learning process.
   * 
   * - **increment_study**: Starts incremental learning.
   * 
   * - **change_status**: Changes the status.
   * 
   * @example
   * restart_study
   */
  operateType?: string;
  /**
   * @remarks
   * The target status. This parameter applies only when `OperateType` is set to `change_status`. Valid values:
   * 
   * - **monitoring**: Monitoring mode.
   * 
   * - **blocking**: Blocking mode.
   * 
   * @example
   * monitoring
   */
  status?: string;
  /**
   * @remarks
   * A list of server UUIDs.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      operateType: 'OperateType',
      status: 'Status',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      status: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

