// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. If you do not specify an accelerated domain name, all accelerated domain names are queried.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The region where WAF is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you leave this parameter empty, the default resource group is used.
   * 
   * @example
   * /
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

