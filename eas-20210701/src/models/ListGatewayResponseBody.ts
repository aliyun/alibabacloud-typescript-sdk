// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyGatewaysLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the gateway tag.
   * 
   * @example
   * key1
   */
  labelKey?: string;
  /**
   * @remarks
   * The value of the gateway tag.
   * 
   * @example
   * value1
   */
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyGateways extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PrePaid: Subscription.
   * 
   * - PostPaid: Pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the private gateway was created. The time is in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The instance type used by the private gateway.
   * 
   * @example
   * 2c4g
   */
  instanceType?: string;
  /**
   * @remarks
   * The public network endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******.cn-wulanchabu.pai-eas.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * @example
   * true
   */
  internetEnabled?: boolean;
  /**
   * @remarks
   * The internal network endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******-vpc.cn-wulanchabu.pai-eas.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * Indicates whether internal network access is enabled.
   */
  intranetEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The list of gateway tags.
   */
  labels?: ListGatewayResponseBodyGatewaysLabels[];
  /**
   * @remarks
   * The number of nodes for the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * Indicates whether HTTP to HTTPS redirection is enabled.
   * 
   * @example
   * true
   */
  SSLRedirectionEnabled?: boolean;
  /**
   * @remarks
   * The status of the private gateway.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the private gateway was last updated. The time is in UTC.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceType: 'InstanceType',
      internetDomain: 'InternetDomain',
      internetEnabled: 'InternetEnabled',
      intranetDomain: 'IntranetDomain',
      intranetEnabled: 'IntranetEnabled',
      isDefault: 'IsDefault',
      labels: 'Labels',
      replicas: 'Replicas',
      SSLRedirectionEnabled: 'SSLRedirectionEnabled',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createTime: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceType: 'string',
      internetDomain: 'string',
      internetEnabled: 'boolean',
      intranetDomain: 'string',
      intranetEnabled: 'boolean',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': ListGatewayResponseBodyGatewaysLabels },
      replicas: 'number',
      SSLRedirectionEnabled: 'boolean',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of private gateways.
   */
  gateways?: ListGatewayResponseBodyGateways[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of gateways.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gateways: 'Gateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateways: { 'type': 'array', 'itemType': ListGatewayResponseBodyGateways },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gateways)) {
      $dara.Model.validateArray(this.gateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

