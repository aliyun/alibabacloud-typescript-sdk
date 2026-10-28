// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * This parameter is required.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The new name of the task.
   * > Specify a meaningful name for your business to facilitate identification. The name does not need to be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * Migration between RDS instances
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The region ID of the task. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzfkjjb5gyy6i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsJobName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

