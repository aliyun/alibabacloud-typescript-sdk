// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The new accelerated domain name.
   * 
   * Only primary domain names are supported, such as `example.net`.
   * 
   * This parameter is required.
   * 
   * @example
   * example.net
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The accelerated domain name to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  targetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regionId: 'RegionId',
      targetDomain: 'TargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regionId: 'string',
      targetDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

