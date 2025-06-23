// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoCcBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that you want to manage. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **src**: the IP address. This field is required and must be of the STRING type.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"src":"198.51.XX.XX"},{"src":"198.52.XX.XX"}]
   */
  blacklist?: string;
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
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      blacklist: 'Blacklist',
      instanceId: 'InstanceId',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blacklist: 'string',
      instanceId: 'string',
      queryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

