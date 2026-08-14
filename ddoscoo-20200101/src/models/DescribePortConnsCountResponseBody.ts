// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortConnsCountResponseBody extends $dara.Model {
  actConns?: number;
  conns?: number;
  cps?: number;
  inActConns?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      conns: 'Conns',
      cps: 'Cps',
      inActConns: 'InActConns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      conns: 'number',
      cps: 'number',
      inActConns: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

