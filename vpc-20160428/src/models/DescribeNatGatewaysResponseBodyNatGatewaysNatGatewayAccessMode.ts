// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode extends $dara.Model {
  modeValue?: string;
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      modeValue: 'ModeValue',
      tunnelType: 'TunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeValue: 'string',
      tunnelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

