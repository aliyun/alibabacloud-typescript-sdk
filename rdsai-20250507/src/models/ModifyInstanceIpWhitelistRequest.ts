// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The method that is used to modify the IP address whitelist. Valid values:
   * 
   * *   **Cover** (default): Uses the IP addresses and CIDR blocks that are specified in the **IpWhitelist** parameter to **overwrite** the existing ones in the current whitelist.
   * *   **Append**: **Appends** the IP addresses and CIDR blocks that are specified in the **IpWhitelist** parameter to the current whitelist.
   * *   **Delete**: **Deletes** the IP addresses and CIDR blocks that are specified in the **IpWhitelist** parameter from the current whitelist. You must retain at least one IP address or CIDR block.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The idempotency token. The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * @example
   * 10.23.XXX.XXX
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The IP address whitelist. Before you modify the IP address whitelist, call the DescribeInstanceIpWhitelist operation to query the existing IP address whitelist of the instance.
   * 
   * **Configuration rules**
   * 
   * *   You can configure IP addresses (such as 10.23.XXX.XXX) or CIDR blocks (such as 10.23.XXX.XXX/24).
   * *   Separate multiple IP addresses or CIDR blocks with commas (,) and do not add spaces preceding or following the commas.
   * *   You can configure up to 1,000 IP addresses and CIDR blocks in total for each instance. If you want to add a large number of IP addresses, we recommend that you merge the IP addresses into CIDR blocks, such as 10.23.XXX.XXX/24.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **ModifyInstanceIpWhitelist**.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      groupName: 'GroupName',
      instanceName: 'InstanceName',
      ipWhitelist: 'IpWhitelist',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupName: 'string',
      instanceName: 'string',
      ipWhitelist: 'string',
      modifyMode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

