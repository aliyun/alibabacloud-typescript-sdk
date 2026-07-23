// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. To obtain this ID, call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 实例ID	pairec-cn-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

