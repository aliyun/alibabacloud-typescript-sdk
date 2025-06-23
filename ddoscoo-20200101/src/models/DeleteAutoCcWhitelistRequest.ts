// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoCcWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP addresses that you want to manage. This parameter is a JSON string. This parameter is a JSON string. The string contains the following field:
   * 
   * *   **src**: the IP address. This field is required and must be of the string type.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"src":"1.1.1.1"},{"src":"2.2.2.2"}]
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

