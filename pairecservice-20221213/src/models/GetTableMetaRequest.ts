// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance ID	pairec-cn-test1
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

