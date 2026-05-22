// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutomaticFrequencyControlConfigResponseBody extends $dara.Model {
  actionType?: string;
  enable?: string;
  level?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      enable: 'Enable',
      level: 'Level',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      enable: 'string',
      level: 'string',
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

