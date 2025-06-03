// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppLayoutsRequestCondition extends $dara.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
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

