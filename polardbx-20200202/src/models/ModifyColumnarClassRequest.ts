// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyColumnarClassRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polarx.n8.large.col
   */
  columnarClass?: string;
  /**
   * @example
   * **
   */
  columnarNodeCount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzrh51fze****pon-cdc
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 0
   */
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      columnarClass: 'ColumnarClass',
      columnarNodeCount: 'ColumnarNodeCount',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnarClass: 'string',
      columnarNodeCount: 'string',
      instanceName: 'string',
      regionId: 'string',
      switchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

