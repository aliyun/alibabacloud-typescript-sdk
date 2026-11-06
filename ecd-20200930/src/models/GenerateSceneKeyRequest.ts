// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSceneKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The validity period of the key, in hours. A value of 0 indicates that the key never expires. If this parameter is not specified, the default server value is used.
   * 
   * @example
   * 6
   */
  expireTime?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * AgentGateway
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      expireTime: 'ExpireTime',
      regionId: 'RegionId',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      expireTime: 'number',
      regionId: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

