// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value from your client for each request. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the request ID as the client token. The request ID is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request without modifying the CIDR allocation. The system checks for required parameters, request format, and service limits. If the check fails, an error is returned. If the check passes, the DryRunOperation error code is returned.
   * 
   * - **false** (default): Sends a normal request. After the check passes, an HTTP 2xx status code is returned and the CIDR allocation is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the CIDR allocation.
   * 
   * The description must be 1 to 256 characters long and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. If you do not specify this parameter, the description is empty.
   * 
   * @example
   * test description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @remarks
   * The ID of the CIDR allocation.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The name of the CIDR allocation.
   * 
   * The name must be 1 to 128 characters long. It cannot start with `http://` or `https://`.
   * 
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * The ID of the region where the CIDR allocation is located. To obtain a region ID, call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation.
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

