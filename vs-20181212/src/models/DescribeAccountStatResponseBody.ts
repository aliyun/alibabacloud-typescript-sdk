// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of device spaces.
   * 
   * @example
   * 100
   */
  groupLimit?: number;
  /**
   * @remarks
   * Number of device groups in the current region.
   * 
   * @example
   * 6
   */
  groupNum?: number;
  /**
   * @remarks
   * Alibaba Cloud account ID.
   * 
   * @example
   * 1165*****601
   */
  id?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Maximum number of templates.
   * 
   * @example
   * 20
   */
  templateLimit?: number;
  /**
   * @remarks
   * Current number of templates.
   * 
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

