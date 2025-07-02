// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to precheck this request. Valid values:
   * 
   * *   **true**: performs a dry run without modifying the CIDR blocks of IPAM pools. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   **false** (default): performs a dry run and the actual request. If the request passes the check, an HTTP 2xx status code is returned and the CIDR allocation information of the IPAM address pool is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the CIDR allocation of the IPAM pool.
   * 
   * The description must be 1 to 256 characters in length and start with a letter, but cannot start with a `http://` or `https://`. This parameter is empty by default.
   * 
   * @example
   * test description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @remarks
   * The ID of the instance to which CIDR blocks are allocated from the IPAM pool.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The name of the CIDR allocation of the IPAM pool.
   * 
   * It must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * The ID of the region where you want to perform the operation. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolAllocationDescription: 'IpamPoolAllocationDescription',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolAllocationDescription: 'string',
      ipamPoolAllocationId: 'string',
      ipamPoolAllocationName: 'string',
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

