// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAGUserAccelerateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth value for the client. Unit: Kbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, ClientToken is set to the value of RequestId. The value of RequestId for each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a precheck to check information such as the permissions and instance status. Valid values:
   * 
   * *   **false** (default): sends the request. After the request passes the check, the maximum bandwidth value of the client is modified.
   * *   **true**: prechecks the request but does not modify the maximum bandwidth value of the client. If you use this value, the system checks the required parameters and the request syntax. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the SAG app instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-w11hk4bqxpakem****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The username of the client account.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

