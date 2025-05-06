// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners extends $dara.Model {
  listenersStatus?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      listenersStatus: 'ListenersStatus',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenersStatus: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

