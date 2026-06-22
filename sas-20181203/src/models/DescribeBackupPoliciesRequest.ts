// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number from which to start displaying the returned results. Default value: 1, which indicates that the display starts from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The identification information of the server protected by the anti-ransomware policy to query. You can enter the IP address or instance ID of the server.
   * 
   * @example
   * 1.1.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The name of the anti-ransomware protection policy to query.
   * 
   * @example
   * SecurityStrategy-20200303
   */
  name?: string;
  /**
   * @remarks
   * The number of backup policies on each page during paginated queries. Default value: 10, which indicates that each page contains 10 protection policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the anti-ransomware protection policy.
   * 
   * - **enabled**: The policy is manually enabled.
   * 
   * - **disabled**: The policy is manually disabled. After the policy is disabled, running backup tasks will stop.
   * 
   * - **closed**: The anti-ransomware capacity is exceeded, and the system disables the policy.
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

