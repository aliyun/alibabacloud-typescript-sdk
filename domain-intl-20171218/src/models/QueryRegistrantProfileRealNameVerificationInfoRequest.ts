// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfileRealNameVerificationInfoRequest extends $dara.Model {
  fetchImage?: boolean;
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  registrantProfileId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      fetchImage: 'FetchImage',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchImage: 'boolean',
      lang: 'string',
      registrantProfileId: 'number',
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

