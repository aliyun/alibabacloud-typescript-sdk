// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance receiving the whitelist entry.
   * 
   * This parameter is required.
   * 
   * @example
   * rabbitmq-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP addresses or VPC IDs to add to the whitelist. Specify IP addresses as CIDR blocks.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.0.0.20/30
   */
  whiteListItem?: string[];
  /**
   * @remarks
   * The type of the whitelist. Set this parameter to `2` if `WhiteListItem` contains IP addresses, or to `1` if it contains VPC IDs.
   * 
   * You can add a VPC whitelist only to instances that have an `anytunnel` VPC endpoint. Newer instances use the `privateLink` endpoint type, which does not support this feature.
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
      whiteListItem: 'WhiteListItem',
      whiteListType: 'WhiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whiteListItem: { 'type': 'array', 'itemType': 'string' },
      whiteListType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.whiteListItem)) {
      $dara.Model.validateArray(this.whiteListItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

