// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppResponseBodyData extends $dara.Model {
  /**
   * @example
   * 4a0fae835cd741f3b12376d8a5a8e549v3
   */
  accessToken?: string;
  /**
   * @example
   * 10
   */
  appGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appGroupId: 'AppGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

