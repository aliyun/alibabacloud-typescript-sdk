// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewayResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the gateway label.
   * 
   * @example
   * key1
   */
  labelKey?: string;
  /**
   * @remarks
   * The value of the gateway label.
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

export class DescribeGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the private gateway was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the self-managed cluster.
   * 
   * @example
   * c935eadf284c14c2da57a2a13ad6******
   */
  externalClusterId?: string;
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
   * The domain name for public network access.
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
   * The status of public network access.
   * 
   * @example
   * Running
   */
  internetStatus?: string;
  /**
   * @remarks
   * The domain name for internal network access.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******-vpc.cn-wulanchabu.pai-eas.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * Indicates whether internal network access is enabled. A value of true indicates that internal network access is enabled. A value of false indicates that internal network access is disabled.
   * 
   * @example
   * true
   */
  intranetEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the private gateway is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The list of gateway labels.
   */
  labels?: DescribeGatewayResponseBodyLabels[];
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
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
   * Indicates whether HTTP redirection to HTTPS is enabled.
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
   * The time when the private gateway was updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      externalClusterId: 'ExternalClusterId',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceType: 'InstanceType',
      internetDomain: 'InternetDomain',
      internetEnabled: 'InternetEnabled',
      internetStatus: 'InternetStatus',
      intranetDomain: 'IntranetDomain',
      intranetEnabled: 'IntranetEnabled',
      isDefault: 'IsDefault',
      labels: 'Labels',
      replicas: 'Replicas',
      requestId: 'RequestId',
      SSLRedirectionEnabled: 'SSLRedirectionEnabled',
      status: 'Status',
      updateTime: 'UpdateTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createTime: 'string',
      externalClusterId: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceType: 'string',
      internetDomain: 'string',
      internetEnabled: 'boolean',
      internetStatus: 'string',
      intranetDomain: 'string',
      intranetEnabled: 'boolean',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': DescribeGatewayResponseBodyLabels },
      replicas: 'number',
      requestId: 'string',
      SSLRedirectionEnabled: 'boolean',
      status: 'string',
      updateTime: 'string',
      workspaceId: 'string',
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

