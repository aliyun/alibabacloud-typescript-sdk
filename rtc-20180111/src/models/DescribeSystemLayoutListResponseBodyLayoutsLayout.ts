// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes } from "./DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes";


export class DescribeSystemLayoutListResponseBodyLayoutsLayout extends $dara.Model {
  /**
   * @remarks
   * AudioMixCount。
   * 
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * 22
   */
  layoutId?: number;
  name?: string;
  panes?: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes;
  static names(): { [key: string]: string } {
    return {
      audioMixCount: 'AudioMixCount',
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioMixCount: 'number',
      layoutId: 'number',
      name: 'string',
      panes: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes,
    };
  }

  validate() {
    if(this.panes && typeof (this.panes as any).validate === 'function') {
      (this.panes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

