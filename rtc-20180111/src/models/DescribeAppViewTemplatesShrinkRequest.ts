// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppViewTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. Create and view it in the console. You can specify only one ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  /**
   * @remarks
   * Search condition.
   */
  conditionShrink?: string;
  /**
   * @remarks
   * Page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      conditionShrink: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      conditionShrink: 'string',
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

