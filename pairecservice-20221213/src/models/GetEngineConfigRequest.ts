// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEngineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can obtain the instance ID by calling [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-cn-***test
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

