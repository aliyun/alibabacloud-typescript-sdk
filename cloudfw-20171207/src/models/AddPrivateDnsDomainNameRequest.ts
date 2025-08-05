// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrivateDnsDomainNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cfw-xxx
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainNameList?: string[];
  /**
   * @remarks
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

