// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortAutoCcStatusResponseBodyPortAutoCcStatus extends $dara.Model {
  mode?: string;
  switch?: string;
  webMode?: string;
  webSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      switch: 'Switch',
      webMode: 'WebMode',
      webSwitch: 'WebSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      switch: 'string',
      webMode: 'string',
      webSwitch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusResponseBody extends $dara.Model {
  portAutoCcStatus?: DescribePortAutoCcStatusResponseBodyPortAutoCcStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portAutoCcStatus: 'PortAutoCcStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portAutoCcStatus: { 'type': 'array', 'itemType': DescribePortAutoCcStatusResponseBodyPortAutoCcStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portAutoCcStatus)) {
      $dara.Model.validateArray(this.portAutoCcStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

