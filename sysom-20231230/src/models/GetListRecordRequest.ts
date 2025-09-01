// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListRecordRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  current?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pageSize: 'pageSize',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pageSize: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

