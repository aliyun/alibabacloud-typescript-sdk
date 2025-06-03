// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppLayoutsResponseBodyLayoutsPanes } from "./DescribeAppLayoutsResponseBodyLayoutsPanes";


export class DescribeAppLayoutsResponseBodyLayouts extends $dara.Model {
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
  panes?: DescribeAppLayoutsResponseBodyLayoutsPanes[];
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
      panes: { 'type': 'array', 'itemType': DescribeAppLayoutsResponseBodyLayoutsPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

