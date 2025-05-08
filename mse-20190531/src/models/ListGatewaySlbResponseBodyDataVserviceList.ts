// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewaySlbResponseBodyDataVServiceList extends $dara.Model {
  port?: string;
  protocol?: string;
  VServerGroupId?: string;
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      protocol: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

