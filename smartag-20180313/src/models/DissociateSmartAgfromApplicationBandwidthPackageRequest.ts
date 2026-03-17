// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateSmartAGFromApplicationBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth plan for application acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * abwp-7963l7iqnquyj3****
   */
  applicationBandwidthPackageId?: string;
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
   * Specifies whether to precheck the request. Check items include permissions and the status of the specified cloud resources. Valid values:
   * 
   * *   **false** (default): sends the request. After the request passes the check, the SAG instance is disassociated from the bandwidth plan for application acceleration.
   * *   **true**: prechecks the request but does not disassociate the SAG instance from the bandwidth plan for application acceleration. If you use this value, the system checks the required parameters and the request syntax. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the bandwidth plan for application acceleration.
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
   * The ID of the SAG instance.
   * 
   * @example
   * sag-w11hk4bqxpakem****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The list of the SAG instance id.
   */
  smartAGIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGIdList: 'SmartAGIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationBandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      smartAGId: 'string',
      smartAGIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.smartAGIdList)) {
      $dara.Model.validateArray(this.smartAGIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

