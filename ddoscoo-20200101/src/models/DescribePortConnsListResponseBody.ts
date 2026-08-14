// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortConnsListResponseBodyConnsList extends $dara.Model {
  actConns?: number;
  conns?: number;
  cps?: number;
  inActConns?: number;
  index?: number;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      conns: 'Conns',
      cps: 'Cps',
      inActConns: 'InActConns',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      conns: 'number',
      cps: 'number',
      inActConns: 'number',
      index: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsListResponseBody extends $dara.Model {
  connsList?: DescribePortConnsListResponseBodyConnsList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connsList: 'ConnsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connsList: { 'type': 'array', 'itemType': DescribePortConnsListResponseBodyConnsList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connsList)) {
      $dara.Model.validateArray(this.connsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

