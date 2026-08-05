// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLiveMPUTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only a single ID can be specified. The ID can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters. You can view your application IDs by navigating to **ApsaraVideo Live > Live+ > ApsaraVideo Real-time Communication > Application Management**.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The task ID. Only a single ID can be specified. The ID can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 55 characters. This ID serves as the identifier for the bypass forwarding task and must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

