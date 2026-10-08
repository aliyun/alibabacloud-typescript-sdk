// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForApplyQuickTransferOutOpenlyRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names to transfer out.
   */
  domainNames?: string[];
  /**
   * @remarks
   * The language of returned error messages. Valid values: zh (Chinese) and en (English). Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the user\\"s client.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainNames)) {
      $dara.Model.validateArray(this.domainNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

