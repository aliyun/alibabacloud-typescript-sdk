// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateSmartAGWithApplicationBandwidthPackageRequestAssociateConfigs extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth for application acceleration of the Smart Access Gateway instance. Unit: Mbit/s.
   * 
   * > The peak bandwidth for application acceleration of each Smart Access Gateway instance cannot exceed the peak bandwidth of the associated bandwidth plan for application acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The Smart Access Gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-gf5serujbhrn2j****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateSmartAGWithApplicationBandwidthPackageRequest extends $dara.Model {
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
   * The list of Smart Access Gateway instances to be associated.
   * 
   * This parameter is required.
   */
  associateConfigs?: AssociateSmartAGWithApplicationBandwidthPackageRequestAssociateConfigs[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the association request. The dry run includes permission and instance status checks. Valid values:
   * 
   * - **false** (default): Sends a normal request and associates the bandwidth plan for application acceleration with the Smart Access Gateway instance after the request passes the check.
   * - **true**: Sends a check request and performs only the check without associating the bandwidth plan for application acceleration with the Smart Access Gateway instance. The check items include whether required parameters are specified and whether the request format is valid. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region to which the bandwidth plan for application acceleration belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      associateConfigs: 'AssociateConfigs',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationBandwidthPackageId: 'string',
      associateConfigs: { 'type': 'array', 'itemType': AssociateSmartAGWithApplicationBandwidthPackageRequestAssociateConfigs },
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associateConfigs)) {
      $dara.Model.validateArray(this.associateConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

