// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
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

