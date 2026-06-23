// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance whose whitelist to query.
   * 
   * This parameter is required.
   * 
   * @example
   * rabbitmq-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of whitelist to query.
   * 
   * VPC whitelists apply only to instances whose VPC endpoint is of the `anytunnel` type. The latest instance versions use a `PrivateLink` VPC endpoint and do not support VPC whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  whiteListType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      whiteListType: 'whiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whiteListType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

