// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DTS task. The DTS task can be a data migration, data synchronization, or change tracking task.
   * 
   * This parameter is required.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The new name of the DTS task.
   * 
   * >  We recommend that you specify a descriptive name for easy identification. You do not need to use a unique name.
   * 
   * This parameter is required.
   * 
   * @example
   * dtstest
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Resource GroupId
   * 
   * @example
   * rg-aekzfkjjb5gyy6i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be:
   * - **false**: No. - **true**: Yes.
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

