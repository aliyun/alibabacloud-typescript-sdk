// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyServiceInfosAgreements extends $dara.Model {
  /**
   * @remarks
   * The agreement name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The agreement URL.
   * 
   * @example
   * https://aliyun.com/xxxxxxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

