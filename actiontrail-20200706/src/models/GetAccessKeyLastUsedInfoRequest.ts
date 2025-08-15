// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI****************
   */
  accessKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

