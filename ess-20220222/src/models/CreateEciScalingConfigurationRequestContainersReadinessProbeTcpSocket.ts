// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket extends $dara.Model {
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

