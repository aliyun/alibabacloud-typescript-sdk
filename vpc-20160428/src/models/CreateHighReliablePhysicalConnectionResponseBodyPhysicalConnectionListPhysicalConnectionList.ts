// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * pc-j5e5qqo616p81ncspbll1
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

