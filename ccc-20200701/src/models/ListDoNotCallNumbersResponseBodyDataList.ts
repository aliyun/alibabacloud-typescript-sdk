// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoNotCallNumbersResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1626962425000
   */
  createTime?: number;
  createdTime?: number;
  /**
   * @example
   * agent
   */
  creator?: string;
  /**
   * @example
   * 1900000****
   */
  number?: string;
  remark?: string;
  /**
   * @example
   * INSTANCE
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      number: 'Number',
      remark: 'Remark',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createdTime: 'number',
      creator: 'string',
      number: 'string',
      remark: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

