// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppLayoutsResponseBodyLayoutsPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
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

export class DescribeAppLayoutsResponseBody extends $dara.Model {
  layouts?: DescribeAppLayoutsResponseBodyLayouts[];
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
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
      layouts: { 'type': 'array', 'itemType': DescribeAppLayoutsResponseBodyLayouts },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.layouts)) {
      $dara.Model.validateArray(this.layouts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

