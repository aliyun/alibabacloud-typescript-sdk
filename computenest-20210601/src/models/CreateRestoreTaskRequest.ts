// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-385d35fb088f453c8fa1
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * You can call [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) to obtain the ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-49793f3bfa034ec6a990
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

