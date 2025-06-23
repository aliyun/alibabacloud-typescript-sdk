// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebCacheModeRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > A forwarding rule must be configured for the domain name, and the domain name must be associated with an instance that uses the Enhanced function plan. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The cache mode of the Static Page Caching policy. Valid values:
   * 
   * *   **standard**: uses the standard cache mode.
   * *   **aggressive**: uses the enhanced cache mode.
   * *   **bypass**: caches no data.
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      mode: 'Mode',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      mode: 'string',
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

