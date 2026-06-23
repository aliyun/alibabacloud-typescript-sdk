// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstanceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance from which to remove a whitelist entry.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-5yd3aw******
   */
  instanceId?: string;
  /**
   * @remarks
   * Call the ListInstanceWhiteList operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 420
   */
  whiteListItemId?: number;
  /**
   * @remarks
   * The type of the whitelist item. Specify 2 for an IP address or 1 for a VPC ID.
   * 
   * A VPC whitelist only applies to instances with the anytunnel VPC endpoint type. Newer instances use PrivateLink for their VPC endpoints and do not support VPC whitelists.
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
      whiteListItemId: 'whiteListItemId',
      whiteListType: 'whiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whiteListItemId: 'number',
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

