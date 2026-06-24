// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * @example
   * aig-53fvrq1oan****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * ai-7ybdeiyoeh5e****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The persistent session ID.
   * 
   * @example
   * p-0bxls9m3cl7s****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The avatar ID.
   */
  avatarId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * f3d1b31c-605e-4d04-a896****
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Running
   */
  taskStatus?: string;
  /**
   * @remarks
   * The tenant ID (Alibaba Cloud account UID).
   * 
   * @example
   * 148871678899****
   */
  tenantId?: number;
  /**
   * @remarks
   * The credentials for connecting to the cloud application.
   * > This parameter is returned only on non-initial calls.
   * 
   * @example
   * DQpbRGVza3RvcF0NCkZvcmNlVGxzVHlwZT0xDQpHV1Rva2VuUGFydDE9MDAva09ROW1FUTU3dU****
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      avatarId: 'AvatarId',
      bizRegionId: 'BizRegionId',
      osType: 'OsType',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      avatarId: 'string',
      bizRegionId: 'string',
      osType: 'string',
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      tenantId: 'number',
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

