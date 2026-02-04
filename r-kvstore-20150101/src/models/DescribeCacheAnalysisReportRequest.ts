// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisReportRequest extends $dara.Model {
  /**
   * @remarks
   * The type of analytics. Set the value to **BigKey**.
   * 
   * This parameter is required.
   * 
   * @example
   * BigKey
   */
  analysisType?: string;
  /**
   * @remarks
   * The date to query. You can query the report for one day each time. Specify the date in the *yyyy-MM-dd*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-08-05Z
   */
  date?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * -bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the child node in the cluster instance.
   * 
   * >  If you do not specify this parameter, the analysis results of all child nodes in the instance are returned.
   * 
   * @example
   * -bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * > If the parameter value exceeds the maximum number of the returned pages, an empty large key list is returned.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * > The default value is **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      analysisType: 'AnalysisType',
      date: 'Date',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumbers: 'PageNumbers',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisType: 'string',
      date: 'string',
      instanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumbers: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

