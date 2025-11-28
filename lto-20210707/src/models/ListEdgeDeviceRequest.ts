// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeDeviceRequest extends $dara.Model {
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  num?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  productKey?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      num: 'Num',
      productKey: 'ProductKey',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      num: 'number',
      productKey: 'string',
      regionId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

