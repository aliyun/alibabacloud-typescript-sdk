// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAccessesRequestTag } from "./DescribeVpcAccessesRequestTag";


export class DescribeVpcAccessesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to conduct precise queries
   * 
   * @example
   * false
   */
  accurateQuery?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 10.199.26.***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the authorization. The name must be unique.
   * 
   * @example
   * wuying-edm-svc
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 8080
   */
  port?: string;
  securityToken?: string;
  /**
   * @remarks
   * The port number.
   */
  tag?: DescribeVpcAccessesRequestTag[];
  /**
   * @remarks
   * The ID of the VPC authorization.
   * 
   * @example
   * vpc-*****ssds24
   */
  vpcAccessId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf657qec7lx42paw3qxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accurateQuery: 'AccurateQuery',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      port: 'Port',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accurateQuery: 'boolean',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      port: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVpcAccessesRequestTag },
      vpcAccessId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

