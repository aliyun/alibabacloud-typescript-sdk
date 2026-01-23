// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityWatchSwitchRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  open?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  watchIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      open: 'Open',
      watchIdList: 'WatchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      open: 'boolean',
      watchIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.watchIdList)) {
      $dara.Model.validateArray(this.watchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityWatchSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateQualityWatchSwitchRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateQualityWatchSwitchRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

