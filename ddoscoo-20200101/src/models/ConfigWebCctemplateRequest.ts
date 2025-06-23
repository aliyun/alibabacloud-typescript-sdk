// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigWebCCTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The mode of the Frequency Control policy. Valid values:
   * 
   * *   **default**: Normal
   * *   **gf_under_attack**: Emergency
   * *   **gf_sos_verify**: Strict
   * *   **gf_sos_enhance**: Super Strict
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

