// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * You can enter up to 50 IDs.
   * 
   * This parameter is required.
   */
  acceleratorIds?: string[];
  /**
   * @remarks
   * The accelerated domain name to be added.
   * 
   * Wildcard domain names are supported. A wildcard domain name must start with `*.`, such as `*.example.com`.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true:** performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, a 2xx HTTP status code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorIds: 'AcceleratorIds',
      domain: 'Domain',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorIds: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acceleratorIds)) {
      $dara.Model.validateArray(this.acceleratorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

