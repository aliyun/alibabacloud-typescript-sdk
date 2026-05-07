// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEngineConfigRequest extends $dara.Model {
  deleteAll?: boolean;
  /**
   * @example
   * pairec-cn-***test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAll: 'DeleteAll',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAll: 'boolean',
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

