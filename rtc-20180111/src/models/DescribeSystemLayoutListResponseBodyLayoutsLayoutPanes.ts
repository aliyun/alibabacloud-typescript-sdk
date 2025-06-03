// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes } from "./DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes";


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

