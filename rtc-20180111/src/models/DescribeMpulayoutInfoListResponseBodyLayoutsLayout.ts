// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes } from "./DescribeMpulayoutInfoListResponseBodyLayoutsLayoutPanes";


export class DescribeMPULayoutInfoListResponseBodyLayoutsLayout extends $dara.Model {
  /**
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  panes?: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes;
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
      panes: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes,
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

