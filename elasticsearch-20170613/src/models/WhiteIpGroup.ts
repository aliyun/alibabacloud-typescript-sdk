// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the IP address whitelist. Valid values:
   * 
   * - PRIVATE_ES: Elasticsearch private network access whitelist
   * - PUBLIC_ES: Elasticsearch public network access whitelist
   * - PRIVATE_KIBANA: Kibana private network access whitelist
   * - PUBLIC_KIBANA: Kibana public network access whitelist.
   * 
   * @example
   * PRIVATE_ES
   */
  whiteIpType?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   */
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      whiteIpType: 'WhiteIpType',
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteIpType: 'string',
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

