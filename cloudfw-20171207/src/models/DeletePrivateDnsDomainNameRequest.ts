// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrivateDnsDomainNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pd-12345
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The list of domain names.
   * 
   * This parameter is required.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
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

