// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppStreamingOutTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID, created and queried through the console. Only a single ID is supported.
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
   * Page number. By default, page 1 is queried.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page. The default value is 10.
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

