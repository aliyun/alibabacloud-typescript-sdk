// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppAgentTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123121414122313121313
   */
  id?: string;
  /**
   * @example
   * 智能体模版
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

