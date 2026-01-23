// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualitySchedulesRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      scheduleIdList: 'ScheduleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.scheduleIdList)) {
      $dara.Model.validateArray(this.scheduleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualitySchedulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteQualitySchedulesRequestDeleteCommand;
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
      deleteCommand: DeleteQualitySchedulesRequestDeleteCommand,
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

