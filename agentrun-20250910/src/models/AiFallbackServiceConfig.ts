// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiFallbackServiceConfig extends $dara.Model {
  passThroughModelName?: boolean;
  serviceId?: string;
  targetModelName?: string;
  static names(): { [key: string]: string } {
    return {
      passThroughModelName: 'passThroughModelName',
      serviceId: 'serviceId',
      targetModelName: 'targetModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passThroughModelName: 'boolean',
      serviceId: 'string',
      targetModelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

