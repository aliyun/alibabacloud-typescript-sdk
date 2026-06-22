// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRiskUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page when using paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * s-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * ca_cpm_****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the asset to query.
   * 
   * @example
   * 1.1.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset to query.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * oracle-win-001****
   */
  machineName?: string;
  /**
   * @remarks
   * The maximum number of entries per page when using paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether risks exist. Valid values:
   * 
   * - **true**: Risks exist.
   * - **false**: Risks do not exist.
   * 
   * @example
   * true
   */
  risk?: boolean;
  /**
   * @remarks
   * The name of the detection target.
   * 
   * @example
   * source-test-obj-0****
   */
  targetName?: string;
  /**
   * @remarks
   * The object type of the detection target. Valid values:
   * 
   * - **1**: host snapshot
   * - **2**: host image
   * - **3**: user snapshot
   * - **4**: user custom image
   * 
   * @example
   * 3
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      machineName: 'MachineName',
      pageSize: 'PageSize',
      risk: 'Risk',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      machineName: 'string',
      pageSize: 'number',
      risk: 'boolean',
      targetName: 'string',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

