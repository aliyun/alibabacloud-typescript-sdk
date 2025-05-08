// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConfigResponseBodyDataNacosRunningEnv extends $dara.Model {
  /**
   * @remarks
   * Indicates whether empty list protection is enabled.
   * 
   * @example
   * true
   */
  emptyProtect?: boolean;
  grayAuth?: string;
  static names(): { [key: string]: string } {
    return {
      emptyProtect: 'emptyProtect',
      grayAuth: 'grayAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyProtect: 'boolean',
      grayAuth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

