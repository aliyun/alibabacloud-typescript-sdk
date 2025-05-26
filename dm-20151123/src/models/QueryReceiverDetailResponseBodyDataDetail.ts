// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverDetailResponseBodyDataDetail extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Content
   * 
   * @example
   * {\\"Domains\\": [\\"a.example.net\\", \\"b.example.net\\", \\"c.example.net\\", \\"d.example.net\\"]}
   */
  data?: string;
  /**
   * @remarks
   * Recipient address
   * 
   * @example
   * a***@example.net
   */
  email?: string;
  /**
   * @remarks
   * Creation time in UTC format
   * 
   * @example
   * 1569734892
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      data: 'Data',
      email: 'Email',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      data: 'string',
      email: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

