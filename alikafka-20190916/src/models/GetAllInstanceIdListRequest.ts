// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllInstanceIdListRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance. This parameter is reserved.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

