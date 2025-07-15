// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveMpuTaskSeiRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * >  The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The custom SEI.
   * 
   * >  The value is a JSON string that can be up to 4,096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * {"name":"myroom"}
   */
  customSei?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * >  The ID can be up to 55 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * AL-4bce036dd90277c50705b0599wgfffc7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customSei: 'CustomSei',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customSei: 'string',
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

