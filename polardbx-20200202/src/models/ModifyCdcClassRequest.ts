// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdcClassRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  CDCNodeCount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * premium
   */
  cdcClass?: string;
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
      CDCNodeCount: 'CDCNodeCount',
      cdcClass: 'CdcClass',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CDCNodeCount: 'string',
      cdcClass: 'string',
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

