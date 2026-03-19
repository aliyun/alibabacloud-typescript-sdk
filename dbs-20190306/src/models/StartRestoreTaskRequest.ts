// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRestoreTaskRequest extends $dara.Model {
  /**
   * @remarks
   * A client token. It ensures the idempotence of the request and prevents the same request from being submitted multiple times.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * This parameter is required.
   * 
   * @example
   * s102h7rfXXXX
   */
  restoreTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      restoreTaskId: 'RestoreTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      restoreTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

