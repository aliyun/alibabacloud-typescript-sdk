// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyResponseBodyDBProxyAVZones extends $dara.Model {
  DBProxyAVZones?: string[];
  static names(): { [key: string]: string } {
    return {
      DBProxyAVZones: 'DBProxyAVZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyAVZones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyAVZones)) {
      $dara.Model.validateArray(this.DBProxyAVZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

