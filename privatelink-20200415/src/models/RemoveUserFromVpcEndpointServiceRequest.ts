// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserFromVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned. The dry run checks whether the AccessKey pair is valid, whether the Resource Access Management (RAM) user is granted the required permissions (authorization), and whether the required parameters are specified.
   * 
   * - **false** (default): sends a Normal request. If the request passes the check, a 2xx HTTP status code is returned and the user account is removed from the service whitelist.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint service from which you want to remove the service whitelist. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the endpoint service.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The user whitelist in ARN format.
   * 
   * @example
   * acs:ram:*:<account-id>:*
   */
  userARN?: string;
  /**
   * @remarks
   * The ID of the account to remove from the service whitelist.
   * 
   * @example
   * 12345678
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      userARN: 'UserARN',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      userARN: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

