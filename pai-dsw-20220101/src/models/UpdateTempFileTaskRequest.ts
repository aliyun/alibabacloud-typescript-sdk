// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTempFileTaskRequest extends $dara.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      gmtExpiredTime: 'GmtExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

