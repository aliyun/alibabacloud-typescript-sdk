// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchApplyAdviceByIdListRequest extends $dara.Model {
  /**
   * @remarks
   * The date when the optimization suggestions were generated. Specify the date in the `yyyyMMdd` format. The date is in UTC.
   * 
   * @example
   * 20221115
   */
  adviceDate?: number;
  /**
   * @remarks
   * The IDs of the optimization suggestions that you want to apply. Separate multiple IDs with commas (,).
   * 
   * @example
   * c2589ff3-e86c-4f19-80c8-2aeb7dd9****,53414470-ebf4-4a53-a312-8a1ad8fd****,6e8dce84-fec8-4b0b-9c04-b0cea12c****,b3b9703d-55ca-47e0-96dd-6a4a9dbf****
   */
  adviceIdList?: string;
  /**
   * @remarks
   * The action to be applied.
   * 
   * @example
   * DROP_INDEX
   */
  applyType?: string;
  /**
   * @remarks
   * Specifies whether to immediately start the build task.
   * 
   * @example
   * false
   */
  buildImmediately?: boolean;
  /**
   * @remarks
   * The ID of the data warehouse cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of data warehouse clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
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
      adviceIdList: 'AdviceIdList',
      applyType: 'ApplyType',
      buildImmediately: 'BuildImmediately',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'number',
      adviceIdList: 'string',
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

