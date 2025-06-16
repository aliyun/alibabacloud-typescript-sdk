// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFullNatEntriesResponseBodyFullNatEntries extends $dara.Model {
  /**
   * @remarks
   * The backend IP address that is used for FULLNAT address translation in FULLNAT entries.
   * 
   * @example
   * 192.168.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The backend port that is used for port mapping in FULLNAT entries. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  accessPort?: string;
  /**
   * @remarks
   * The time when the FULLNAT entry was created.
   * 
   * @example
   * 2021-10-27T02:44:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the FULLNAT entry.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  fullNatEntryDescription?: string;
  /**
   * @remarks
   * The ID of the FULLNAT entry.
   * 
   * @example
   * fullnat-gw8fz23jezpbblf1j****
   */
  fullNatEntryId?: string;
  /**
   * @remarks
   * The name of the FULLNAT entry.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  fullNatEntryName?: string;
  /**
   * @remarks
   * The status of the FULLNAT entry. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Available
   */
  fullNatEntryStatus?: string;
  /**
   * @remarks
   * The ID of the FULLNAT table to which the FULLNAT entry belongs.
   * 
   * @example
   * fulltb-gw88z7hhlv43rmb26****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The protocol of the packets that are forwarded. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The NAT IP address that is used for address translation in FULLNAT entries.
   * 
   * @example
   * 192.168.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The frontend port that is used for port mapping in FULLNAT entries. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  natIpPort?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-gw80wedm8pq0tpr2****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The type of the ENI. The value is set to **Endpoint**, which indicates a reverse endpoint.
   * 
   * @example
   * Endpoint
   */
  networkInterfaceType?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      accessPort: 'AccessPort',
      creationTime: 'CreationTime',
      fullNatEntryDescription: 'FullNatEntryDescription',
      fullNatEntryId: 'FullNatEntryId',
      fullNatEntryName: 'FullNatEntryName',
      fullNatEntryStatus: 'FullNatEntryStatus',
      fullNatTableId: 'FullNatTableId',
      ipProtocol: 'IpProtocol',
      natIp: 'NatIp',
      natIpPort: 'NatIpPort',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceType: 'NetworkInterfaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      accessPort: 'string',
      creationTime: 'string',
      fullNatEntryDescription: 'string',
      fullNatEntryId: 'string',
      fullNatEntryName: 'string',
      fullNatEntryStatus: 'string',
      fullNatTableId: 'string',
      ipProtocol: 'string',
      natIp: 'string',
      natIpPort: 'string',
      networkInterfaceId: 'string',
      networkInterfaceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

