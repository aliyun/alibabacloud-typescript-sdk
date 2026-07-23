// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCalculationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. Call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
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

