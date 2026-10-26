// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCalculationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call [ListInstances](https://help.aliyun.com/document_detail/2411819.html) to obtain the instance ID.
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

