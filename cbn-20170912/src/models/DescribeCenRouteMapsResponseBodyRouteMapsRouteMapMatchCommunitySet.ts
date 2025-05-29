// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet extends $dara.Model {
  matchCommunity?: string[];
  static names(): { [key: string]: string } {
    return {
      matchCommunity: 'MatchCommunity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCommunity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.matchCommunity)) {
      $dara.Model.validateArray(this.matchCommunity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

