// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkipFullJobTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DTS task. The DTS task can be a data migration, data synchronization, or change tracking task.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the primary key.
   * 
   * @example
   * 123
   */
  jobProgressId?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-aek2ilvoxlrdcby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to query only zero-extract, transform, load (ETL) integration tasks. Valid values:
   * 
   * *   **true**: yes.
   * *   **false**: no.
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

