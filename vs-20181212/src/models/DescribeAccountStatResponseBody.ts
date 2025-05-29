// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountStatResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  groupLimit?: number;
  /**
   * @example
   * 6
   */
  groupNum?: number;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 3238848****092996
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  templateLimit?: number;
  /**
   * @example
   * 10
   */
  templateNum?: number;
  static names(): { [key: string]: string } {
    return {
      groupLimit: 'GroupLimit',
      groupNum: 'GroupNum',
      id: 'Id',
      requestId: 'RequestId',
      templateLimit: 'TemplateLimit',
      templateNum: 'TemplateNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupLimit: 'number',
      groupNum: 'number',
      id: 'string',
      requestId: 'string',
      templateLimit: 'number',
      templateNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

