// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The task type. Set this parameter to MigrateData, which indicates a data migration task.
   * 
   * This parameter is required.
   * 
   * @example
   * MigrateData
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

