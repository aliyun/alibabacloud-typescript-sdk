// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEngineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all engine configurations with the same name.
   * 
   * @example
   * False
   */
  deleteAll?: boolean;
  /**
   * @remarks
   * The instance ID. For information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
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

