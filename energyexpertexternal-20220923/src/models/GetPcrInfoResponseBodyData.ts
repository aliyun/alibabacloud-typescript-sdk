// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPcrInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the report was created. The timestamp is in milliseconds.
   * 
   * @example
   * 1709109790532
   */
  createTime?: string;
  /**
   * @remarks
   * Report name
   * 
   * @example
   * report name
   */
  name?: string;
  /**
   * @remarks
   * Download url link.
   * 
   * @example
   * https://energy.alibabacloud.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

