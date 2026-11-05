// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupChargeTypeResponseBodyAppInstanceGroupModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the billing conversion order task, used to associate with the current conversion. It is returned only when a related order task is required and created. It does not indicate that the payment is completed or the new billing method has taken effect.
   * 
   * @example
   * task-123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task information for the billing method conversion.
   */
  appInstanceGroupModel?: ModifyAppInstanceGroupChargeTypeResponseBodyAppInstanceGroupModel;
  /**
   * @remarks
   * The unique ID of the request. You can use the ID to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModel: 'AppInstanceGroupModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModel: ModifyAppInstanceGroupChargeTypeResponseBodyAppInstanceGroupModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInstanceGroupModel && typeof (this.appInstanceGroupModel as any).validate === 'function') {
      (this.appInstanceGroupModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

