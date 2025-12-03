// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTLSCipherPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the information about the associated listeners. Valid values:
   * 
   * *   **true**: returns the information about the associated listeners.
   * *   **false** (default): does not return the information about the associated listeners.
   * 
   * @example
   * false
   */
  includeListener?: boolean;
  /**
   * @remarks
   * The maximum number of TLS policies to be queried in this call. Valid values: **1** to **100**. If you do not set this parameter, the default value **20** is used.
   * 
   * @example
   * 20
   */
  maxItems?: number;
  /**
   * @remarks
   * The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * TLSPolicy-test****
   */
  name?: string;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query or no next query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the TLS policy.
   * 
   * @example
   * tls-bp17elso1h323r****
   */
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      includeListener: 'IncludeListener',
      maxItems: 'MaxItems',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeListener: 'boolean',
      maxItems: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

