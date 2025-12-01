// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchModifyEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string[];
  endUserId?: string[];
  /**
   * @example
   * 0
   */
  maxDesktopPerUser?: number;
  /**
   * @example
   * 1
   */
  maxUserPerDesktop?: number;
  /**
   * @example
   * true
   */
  preview?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * AVERAGE
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      maxDesktopPerUser: 'MaxDesktopPerUser',
      maxUserPerDesktop: 'MaxUserPerDesktop',
      preview: 'Preview',
      regionId: 'RegionId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: { 'type': 'array', 'itemType': 'string' },
      maxDesktopPerUser: 'number',
      maxUserPerDesktop: 'number',
      preview: 'boolean',
      regionId: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

