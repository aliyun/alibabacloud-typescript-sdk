// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackfillStrategy extends $dara.Model {
  enabled?: boolean;
  endTime?: number;
  immediate?: boolean;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      endTime: 'endTime',
      immediate: 'immediate',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      endTime: 'number',
      immediate: 'boolean',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

