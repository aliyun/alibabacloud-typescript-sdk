// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes extends $dara.Model {
  sourceChildInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceChildInstanceType: 'SourceChildInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceChildInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceChildInstanceType)) {
      $dara.Model.validateArray(this.sourceChildInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

