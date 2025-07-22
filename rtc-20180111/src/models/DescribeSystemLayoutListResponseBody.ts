// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @remarks
   * MajorPane。
   * 
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes extends $dara.Model {
  panes?: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes[];
  static names(): { [key: string]: string } {
    return {
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panes: { 'type': 'array', 'itemType': DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes },
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

export class DescribeSystemLayoutListResponseBodyLayouts extends $dara.Model {
  layout?: DescribeSystemLayoutListResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeSystemLayoutListResponseBodyLayoutsLayout },
    };
  }

  validate() {
    if(Array.isArray(this.layout)) {
      $dara.Model.validateArray(this.layout);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBody extends $dara.Model {
  layouts?: DescribeSystemLayoutListResponseBodyLayouts;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalNum?: number;
  /**
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      layouts: 'Layouts',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layouts: DescribeSystemLayoutListResponseBodyLayouts,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.layouts && typeof (this.layouts as any).validate === 'function') {
      (this.layouts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

