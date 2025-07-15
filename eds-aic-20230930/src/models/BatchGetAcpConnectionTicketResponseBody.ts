// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-1uzb6heg797z3****
   */
  appInstanceGroupId?: string;
  appInstanceId?: string;
  errorCode?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-ajxvwo1u0hqvd****
   */
  instanceId?: string;
  persistentAppInstanceId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * cn-hangzhou@c9f5c2e8-f5c4-4b01-8602-000cae94****
   */
  taskId?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * FINISHED
   */
  taskStatus?: string;
  /**
   * @remarks
   * The ticket used to connect to the cloud phone instance.
   * 
   * @example
   * piVE58_AdmVSVW7SEW3*AE5*p8mmO5gvItsNOmv4S_f_cNpoU_BOTwChTBoNM1ZJeedfK9zxYnbN5hossqIZCr6t7SGxRigm2Cb4fGaCdBZWIzmgdHq6sXXZQg4KFWufyvpeV*0*Cm58slMT1tJw3****
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      persistentAppInstanceId: 'PersistentAppInstanceId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      errorCode: 'string',
      instanceId: 'string',
      persistentAppInstanceId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAcpConnectionTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the instance connection tasks.
   */
  instanceConnectionModels?: BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConnectionModels: 'InstanceConnectionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConnectionModels: { 'type': 'array', 'itemType': BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceConnectionModels)) {
      $dara.Model.validateArray(this.instanceConnectionModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

