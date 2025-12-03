// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInfoRequest extends $dara.Model {
  /**
   * @example
   * 61e54b0e0bb300d827e1ae27
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

