// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkipFullJobTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task. **[Deprecated]** This parameter is deprecated and no longer takes effect.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The primary key ID of JobProgress. Each object in a full data migration task corresponds to a JobProgress record. Specify this parameter to determine the tables to skip.
   * 
   * @example
   * 123
   */
  jobProgressId?: string;
  /**
   * @remarks
   * The region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-aek2ilvoxlrdcby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
   * - **true**: yes
   * - **false**: no
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobProgressId: 'JobProgressId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobProgressId: 'string',
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

