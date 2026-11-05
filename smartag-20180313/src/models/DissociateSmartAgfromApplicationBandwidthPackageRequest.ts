// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateSmartAGFromApplicationBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the bandwidth plan for application acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * abwp-7963l7iqnquyj3****
   */
  applicationBandwidthPackageId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the disassociation request. The dry run includes checks on permissions and instance status. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the bandwidth plan for application acceleration is disassociated from the Smart Access Gateway instance.
   * - **true**: Sends a dry run request. Only the check is performed, and the bandwidth plan for application acceleration is not disassociated from the Smart Access Gateway instance. Check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the bandwidth plan for application acceleration.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
   * 
   * @example
   * sag-w11hk4bqxpakem****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The list of Smart Access Gateway instance IDs.
   * 
   * You can enter up to 100 Smart Access Gateway instance IDs at a time.
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

