// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaConfig extends $dara.Model {
  allowedMaxPriority?: number;
  enableDLC?: boolean;
  enableDSW?: boolean;
  enableTideResource?: boolean;
  resourceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      allowedMaxPriority: 'AllowedMaxPriority',
      enableDLC: 'EnableDLC',
      enableDSW: 'EnableDSW',
      enableTideResource: 'EnableTideResource',
      resourceLevel: 'ResourceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedMaxPriority: 'number',
      enableDLC: 'boolean',
      enableDSW: 'boolean',
      enableTideResource: 'boolean',
      resourceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

