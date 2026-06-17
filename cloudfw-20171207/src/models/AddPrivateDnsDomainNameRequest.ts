// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrivateDnsDomainNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the private DNS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cfw-xxx
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The list of private domain names to add.
   * 
   * This parameter is required.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * > For more information about the regions that Cloud Firewall supports, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      domainNameList: 'DomainNameList',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      regionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainNameList)) {
      $dara.Model.validateArray(this.domainNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

