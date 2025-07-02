// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResourcesIpCountDetail extends $dara.Model {
  freeIpCount?: string;
  totalIpCount?: string;
  usedIpCount?: string;
  static names(): { [key: string]: string } {
    return {
      freeIpCount: 'FreeIpCount',
      totalIpCount: 'TotalIpCount',
      usedIpCount: 'UsedIpCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeIpCount: 'string',
      totalIpCount: 'string',
      usedIpCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

