// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zxu****9d02
   */
  instanceId?: string;
  /**
   * @remarks
   * The UID of the resource ownership user.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page when paging. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The domain name that is added to WAF.
   * > This parameter is supported only when the cloud service type is ddos.
   * 
   * @example
   * www.c**sw.net
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The WAF protection status.
   * 
   * @example
   * all
   */
  resourceInstanceAccessStatus?: string;
  /**
   * @remarks
   * The instance ID of the cloud service.
   * 
   * @example
   * lb-2zeugkfj81jvo****4tqm
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The IP address of the instance that is added to WAF.
   * 
   * @example
   * 1.X.X.1
   */
  resourceInstanceIp?: string;
  /**
   * @remarks
   * The name of the instance that is added to WAF.
   * 
   * @example
   * demoInstanceName
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The public IP address of the cloud service.
   * 
   * @example
   * 1.X.X.1
   * 
   * @deprecated
   */
  resourceIp?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-aekz6ql****5uzi
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The instance name of the cloud service.
   * 
   * @example
   * exampleResourceName
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the cloud service. Valid values:
   * 
   * - **clb4**: Layer 4 CLB.
   * 
   * - **clb7**: Layer 7 CLB.
   * 
   * - **ecs**: ECS.
   * - **nlb**: NLB.
   * - **ddos**: Anti-DDoS.
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud service. Valid values:
   * - **cn-chengdu**: China Southwest 1 (Chengdu).
   * 
   * - **cn-beijing**: China North 2 (Beijing).
   * 
   * - **cn-zhangjiakou**: China North 3 (Zhangjiakou).
   * 
   * - **cn-hangzhou**: China East 1 (Hangzhou).
   * 
   * - **cn-shanghai**: China East 2 (Shanghai).
   * 
   * - **cn-shenzhen**: China South 1 (Shenzhen).
   * 
   * - **cn-qingdao**: China North 1 (Qingdao).
   * 
   * - **cn-hongkong**: Hong Kong (China).
   * 
   * - **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * 
   * - **ap-southeast-5**: Indonesia (Jakarta).
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceDomain: 'ResourceDomain',
      resourceInstanceAccessStatus: 'ResourceInstanceAccessStatus',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceIp: 'ResourceIp',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceDomain: 'string',
      resourceInstanceAccessStatus: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceIp: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

