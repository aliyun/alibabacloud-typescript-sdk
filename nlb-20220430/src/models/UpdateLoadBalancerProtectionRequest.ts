// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate this value. Ensure that the value is unique among all requests. Only ASCII characters are allowed.
   * 
   * >  If you do not specify this parameter, the value of **RequestId** is used.**** **RequestId** of each request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  deletionProtectionEnabled?: boolean;
  /**
   * @remarks
   * The reason why deletion protection is enabled. The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  This parameter takes effect only when **DeletionProtectionEnabled** is set to **true**.
   * 
   * @example
   * Instance_Is_Bound_By_Acceleration_Instance
   */
  deletionProtectionReason?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends a request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  This parameter takes effect only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: disables the configuration read-only mode. In this case, you cannot set the **ModificationProtectionReason** parameter. If you specify **ModificationProtectionReason**, the value is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode. In this case, you can specify **ModificationProtectionReason**.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot use the NLB console to modify configurations of the NLB instance. However, you can call API operations to modify the instance configurations.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deletionProtectionEnabled: 'DeletionProtectionEnabled',
      deletionProtectionReason: 'DeletionProtectionReason',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtectionEnabled: 'boolean',
      deletionProtectionReason: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
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

