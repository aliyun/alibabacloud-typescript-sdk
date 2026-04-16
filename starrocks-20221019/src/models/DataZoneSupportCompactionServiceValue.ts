// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataZoneSupportCompactionServiceValue extends $dara.Model {
  zoneId?: string;
  resourceLevel?: string;
  recommended?: boolean;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'zoneId',
      resourceLevel: 'resourceLevel',
      recommended: 'recommended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      resourceLevel: 'string',
      recommended: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

