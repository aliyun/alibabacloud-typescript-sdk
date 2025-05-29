// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds extends $dara.Model {
  sourceRouteTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceRouteTableId: 'SourceRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceRouteTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceRouteTableId)) {
      $dara.Model.validateArray(this.sourceRouteTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

