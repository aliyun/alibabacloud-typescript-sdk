// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInvocationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of cloud desktop N. Valid values of N: 1 to 50.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * t-7d2a745b412b4601b2d47f6a768d****
   */
  invokeId?: string;
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
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      invokeId: 'InvokeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      invokeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

