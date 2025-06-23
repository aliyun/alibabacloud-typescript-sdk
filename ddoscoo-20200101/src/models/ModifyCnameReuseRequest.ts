// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCnameReuseRequest extends $dara.Model {
  /**
   * @remarks
   * The CNAME record that you want to reuse for the website.
   * 
   * @example
   * 4o6ep6q217k9****.aliyunddos0004.com
   */
  cname?: string;
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
   * Specifies whether to enable CNAME reuse. Valid values:
   * 
   * *   **0:** disabled
   * *   **1:** enabled
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enable?: number;
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
      cname: 'Cname',
      domain: 'Domain',
      enable: 'Enable',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      enable: 'number',
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

