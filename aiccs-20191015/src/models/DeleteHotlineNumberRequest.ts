// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05710000****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

