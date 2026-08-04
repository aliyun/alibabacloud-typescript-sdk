// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSiteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

