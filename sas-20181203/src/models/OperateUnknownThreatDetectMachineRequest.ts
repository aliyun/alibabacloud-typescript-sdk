// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateUnknownThreatDetectMachineRequest extends $dara.Model {
  /**
   * @example
   * restart_study
   */
  operateType?: string;
  /**
   * @example
   * monitoring
   */
  status?: string;
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

