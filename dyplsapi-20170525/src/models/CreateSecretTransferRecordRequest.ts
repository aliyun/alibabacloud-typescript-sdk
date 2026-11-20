// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretTransferRecordRequest extends $dara.Model {
  /**
   * @remarks
   * 迁移后的新号码池key
   * 
   * @example
   * FC111111
   */
  lastPartnerKey?: string;
  /**
   * @remarks
   * 指定号码（单一、批量）迁移;一次最多可迁移500个号码，号码间请换行隔开.
   * 
   * @example
   * 198xxxxxxxx
   * 138xxxxxxx
   */
  numberList?: string;
  /**
   * @remarks
   * 要迁移的原号码池key
   * 
   * @example
   * FC123456
   */
  originPartnerKey?: string;
  static names(): { [key: string]: string } {
    return {
      lastPartnerKey: 'LastPartnerKey',
      numberList: 'NumberList',
      originPartnerKey: 'OriginPartnerKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastPartnerKey: 'string',
      numberList: 'string',
      originPartnerKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

