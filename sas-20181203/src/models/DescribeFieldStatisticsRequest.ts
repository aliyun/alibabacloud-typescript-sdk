// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of asset to query. If you do not specify an asset type, the statistics information of all types of assets is queried. Valid values:
   * 
   * - **ecs**: server
   * - **cloud_product**: cloud service
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * The ID of the region where the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the main account of the member accounts in the resource folder.
   * >You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the value of this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      regionId: 'RegionId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      regionId: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

