// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAdviceByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The date when the optimization advice was generated, specified in `yyyyMMdd` format in UTC.
   * 
   * @example
   * 20221101
   */
  adviceDate?: number;
  /**
   * @remarks
   * The optimization advice ID.
   * 
   * @example
   * 0baf1f52-53df-487f-8292-99a03716****
   */
  adviceId?: string;
  /**
   * @remarks
   * The adoption type.
   * 
   * @example
   * DROP_INDEX
   */
  applyType?: string;
  /**
   * @remarks
   * Specifies whether to start the build task immediately.
   * 
   * @example
   * false
   */
  buildImmediately?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of data warehouse clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceId: 'AdviceId',
      applyType: 'ApplyType',
      buildImmediately: 'BuildImmediately',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'number',
      adviceId: 'string',
      applyType: 'string',
      buildImmediately: 'boolean',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

