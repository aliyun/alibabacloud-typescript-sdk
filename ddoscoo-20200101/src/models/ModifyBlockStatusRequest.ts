// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBlockStatusRequest extends $dara.Model {
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  lines?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      lines: 'Lines',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      lines: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lines)) {
      $dara.Model.validateArray(this.lines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

