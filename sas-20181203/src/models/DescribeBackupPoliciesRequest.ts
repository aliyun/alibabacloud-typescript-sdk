// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The information that you want to use to identify the servers protected by the anti-ransomware policy. You can enter the IP address or ID of a server.
   * 
   * @example
   * 1.1.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The name of the anti-ransomware policy that you want to query.
   * 
   * @example
   * SecurityStrategy-20200303
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the anti-ransomware policy. Valid values:
   * 
   * *   **enabled**: The anti-ransomware policy is manually enabled.
   * *   **disabled**: The anti-ransomware policy is manually disabled. After an anti-ransomware policy is disabled, the data backup task that is running based on the policy stops.
   * *   **closed**: The anti-ransomware policy automatically stops because the anti-ransomware capacity is insufficient.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      machineRemark: 'MachineRemark',
      name: 'Name',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      machineRemark: 'string',
      name: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

