// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the first page to return. Default value: 1, which indicates that results are returned starting from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The identification information of the server that is protected by the anti-ransomware policy you want to query. You can enter the IP address or instance ID of the server.
   * 
   * @example
   * 1.1.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The name of the anti-ransomware mitigation policy that you want to query.
   * 
   * @example
   * SecurityStrategy-20200303
   */
  name?: string;
  /**
   * @remarks
   * The number of backup policies per page in a paged query. Default value: 10, which indicates that each page contains 10 mitigation policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the anti-ransomware mitigation policy.
   * 
   * - **enabled**: The policy is manually enabled.
   * 
   * - **disabled**: The policy is manually disabled. After the policy is disabled, running backup nodes are stopped.
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

