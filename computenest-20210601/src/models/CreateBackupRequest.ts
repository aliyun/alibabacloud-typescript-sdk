// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupRequest extends $dara.Model {
  /**
   * @remarks
   * Backup description
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the service instance to be transferred to official version.
   * 
   * This parameter is required.
   * 
   * @example
   * si-56cfb7ec3a634448a96c
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

