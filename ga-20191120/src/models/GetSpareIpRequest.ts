// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpareIpRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of a request.
   * 
   * Generate a unique value from your client to ensure that different requests have unique ClientToken values. ClientToken supports only ASCII characters.
   * 
   * @example
   * 1F4B6A4A-C89E-489E-BAF1-52777EE148EF
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without actually creating the resource. The system checks the required parameters, request syntax, and business limitations. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the check passes, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The CNAME spare IP address. When an acceleration area is abnormal, traffic is switched to this IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.100.XX.XX
   */
  spareIp?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      spareIp: 'SpareIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      spareIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

