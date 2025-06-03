// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachInstanceSDGRequestLoadOpt } from "./AttachInstanceSdgrequestLoadOpt";


export class AttachInstanceSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  loadOpt?: AttachInstanceSDGRequestLoadOpt;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      loadOpt: 'LoadOpt',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      loadOpt: AttachInstanceSDGRequestLoadOpt,
      SDGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.loadOpt && typeof (this.loadOpt as any).validate === 'function') {
      (this.loadOpt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

