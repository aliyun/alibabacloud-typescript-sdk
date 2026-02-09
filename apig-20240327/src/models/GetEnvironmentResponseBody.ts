// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayInfo } from "./GatewayInfo";
import { SubDomainInfo } from "./SubDomainInfo";
import { ResourceStatistic } from "./ResourceStatistic";


export class GetEnvironmentResponseBodyDataStatisticsInfo extends $dara.Model {
  /**
   * @remarks
   * 4
   */
  resourceStatistics?: ResourceStatistic[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      resourceStatistics: 'resourceStatistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceStatistics: { 'type': 'array', 'itemType': ResourceStatistic },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceStatistics)) {
      $dara.Model.validateArray(this.resourceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Test environment
   * 
   * @example
   * The environment description.
   */
  alias?: string;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * true
   */
  default?: boolean;
  /**
   * @remarks
   * Testing environment for xx project of xxx
   * 
   * @example
   * The instance information.
   */
  description?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The subdomains.
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * rg-aekzzzntl5njbpi
   * 
   * @example
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about online resources.
   */
  statisticsInfo?: GetEnvironmentResponseBodyDataStatisticsInfo;
  /**
   * @remarks
   * The subdomain information.
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      createTimestamp: 'createTimestamp',
      default: 'default',
      description: 'description',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      statisticsInfo: 'statisticsInfo',
      subDomainInfos: 'subDomainInfos',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      description: 'string',
      environmentId: 'string',
      gatewayInfo: GatewayInfo,
      name: 'string',
      resourceGroupId: 'string',
      statisticsInfo: GetEnvironmentResponseBodyDataStatisticsInfo,
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(this.statisticsInfo && typeof (this.statisticsInfo as any).validate === 'function') {
      (this.statisticsInfo as any).validate();
    }
    if(Array.isArray(this.subDomainInfos)) {
      $dara.Model.validateArray(this.subDomainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message returned.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The environment ID.
   */
  data?: GetEnvironmentResponseBodyData;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 3F8EE674-BB08-5E92-BE6F-E4756A748B0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnvironmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

