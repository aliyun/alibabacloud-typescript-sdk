// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionalRule } from "./ConditionalRule";


export class EventRule extends $dara.Model {
  conditional?: ConditionalRule[];
  enable?: boolean;
  eventId?: string;
  modifyTime?: string;
  operator?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      conditional: 'Conditional',
      enable: 'Enable',
      eventId: 'EventId',
      modifyTime: 'ModifyTime',
      operator: 'Operator',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditional: { 'type': 'array', 'itemType': ConditionalRule },
      enable: 'boolean',
      eventId: 'string',
      modifyTime: 'string',
      operator: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditional)) {
      $dara.Model.validateArray(this.conditional);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

