// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishMigrationStageRequest extends $dara.Model {
  /**
   * @example
   * rmq-cn-pe334f1nx04
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

