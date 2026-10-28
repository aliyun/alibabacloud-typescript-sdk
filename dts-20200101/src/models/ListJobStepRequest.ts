// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobStepRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration or synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * k2gm967v16f****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek3dcgyq7p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether the task is a seamless integration (Zero-ETL) task. Valid values:
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
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
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

