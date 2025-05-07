// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceStaticsRequest extends $dara.Model {
  /**
   * @remarks
   * 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

