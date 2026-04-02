// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTempFileRequest extends $dara.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtExpiredTime?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtExpiredTime: 'GmtExpiredTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtExpiredTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

