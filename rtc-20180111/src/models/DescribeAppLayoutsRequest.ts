// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppLayoutsRequestCondition extends $dara.Model {
  /**
   * @remarks
   * The layout ID.
   * 
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @remarks
   * The layout name.
   * 
   * @example
   * 测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Create and query it using the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * The query conditions.
   */
  condition?: DescribeAppLayoutsRequestCondition;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      condition: DescribeAppLayoutsRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

