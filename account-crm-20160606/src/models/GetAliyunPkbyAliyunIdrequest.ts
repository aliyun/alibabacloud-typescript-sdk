// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliyunPKByAliyunIDRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliyunId?: string;
  email?: string;
  havanaId?: string;
  mobile?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      email: 'Email',
      havanaId: 'HavanaId',
      mobile: 'Mobile',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      email: 'string',
      havanaId: 'string',
      mobile: 'string',
      PK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

