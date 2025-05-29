// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns extends $dara.Model {
  matchAsn?: string[];
  static names(): { [key: string]: string } {
    return {
      matchAsn: 'MatchAsn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchAsn: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.matchAsn)) {
      $dara.Model.validateArray(this.matchAsn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

