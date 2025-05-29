// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet extends $dara.Model {
  operateCommunity?: string[];
  static names(): { [key: string]: string } {
    return {
      operateCommunity: 'OperateCommunity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCommunity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operateCommunity)) {
      $dara.Model.validateArray(this.operateCommunity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

