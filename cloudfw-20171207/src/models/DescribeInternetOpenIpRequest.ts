// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenIpRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-uf6faknmuby7ezht****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * launch-advisor-2023****
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The asset type of the instance.
   * 
   * @example
   * EcsEIP
   */
  assetsType?: string;
  /**
   * @remarks
   * The page number for the paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end time of the public IP address exposure. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1663640336
   */
  endTime?: string;
  /**
   * @remarks
   * The language in which messages are received. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 203.0.113.1
   */
  publicIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The risk level. If you do not specify this parameter, all risk levels are queried. Valid values:
   * - **3**: High risk.
   * - **2**: Medium risk.
   * - **1**: Low risk.
   * - **0**: No risk.
   * 
   * @example
   * 2
   */
  riskLevel?: string;
  /**
   * @remarks
   * The name of the application to query.
   * 
   * @example
   * SSH
   */
  serviceName?: string;
  /**
   * @remarks
   * The start time of the public IP address exposure. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1681957629
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      assetsType: 'AssetsType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      port: 'Port',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      assetsType: 'string',
      currentPage: 'string',
      endTime: 'string',
      lang: 'string',
      pageSize: 'string',
      port: 'string',
      publicIp: 'string',
      regionNo: 'string',
      riskLevel: 'string',
      serviceName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

