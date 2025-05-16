// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApplicationAccessIdRequest extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

