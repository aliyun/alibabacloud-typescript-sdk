// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskFromResourceImportRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The token must be 1 to 64 characters in length and can contain only letters, digits, and hyphens (-). A UUID is recommended.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the resource export task.
   * 
   * This parameter is required.
   * 
   * @example
   * ex-a1b2c3d4e5f60718293a4b5cd
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The resource export version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-vpc-hangzhou
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      exportTaskId: 'string',
      exportVersion: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

