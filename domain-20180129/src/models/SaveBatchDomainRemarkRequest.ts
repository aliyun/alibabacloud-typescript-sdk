// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchDomainRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S12344567
   */
  instanceIds?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * MyRemarkInfo
   */
  remark?: string;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lang: 'Lang',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      lang: 'string',
      remark: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

