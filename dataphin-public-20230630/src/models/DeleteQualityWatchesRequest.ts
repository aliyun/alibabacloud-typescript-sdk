// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityWatchesRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  watchIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      watchIdList: 'WatchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteQualityWatchesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteQualityWatchesRequestDeleteCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteQualityWatchesRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteCommand && typeof (this.deleteCommand as any).validate === 'function') {
      (this.deleteCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

