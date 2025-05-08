// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequestServiceInfoAgreements extends $dara.Model {
  /**
   * @remarks
   * Protocol name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Protocol url.
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

