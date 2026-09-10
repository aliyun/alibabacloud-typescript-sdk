// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBwmMigrationTaskWriterResultPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The submit instance ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

