// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRiskUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * s-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * ca_cpm_****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the asset that you want to query.
   * 
   * @example
   * 1.1.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset that you want to query.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * oracle-win-001****
   */
  machineName?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether risks exist. Valid values:
   * 
   * *   **true**: Risks exist.
   * *   **false**: Risks do not exist.
   * 
   * @example
   * true
   */
  risk?: boolean;
  /**
   * @remarks
   * The name of the detection object.
   * 
   * @example
   * source-test-obj-0****
   */
  targetName?: string;
  /**
   * @remarks
   * Specifies the type of the object being inspected. Valid values:
   * 
   * *   **1**: Host Snapshot.
   * *   **2**: Host Image.
   * *   **3**: User Snapshot.
   * *   **4**: User Image.
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

