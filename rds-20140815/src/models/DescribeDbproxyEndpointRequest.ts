// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1ja4f56s7us****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The proxy endpoint. You can call the [DescribeDBProxy](https://help.aliyun.com/document_detail/610507.html) operation to query the proxy endpoint.
   * 
   * @example
   * testproxy****.rwlb.rds.aliyuncs.com
   */
  DBProxyConnectString?: string;
  /**
   * @remarks
   * The proxy endpoint name. You can call the [DescribeDBProxy](https://help.aliyun.com/document_detail/610507.html) operation to query the proxy endpoint name.
   * 
   * @example
   * keaxncrjluwu0gue****
   */
  DBProxyEndpointId?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to configure this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyConnectString: 'DBProxyConnectString',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyConnectString: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

