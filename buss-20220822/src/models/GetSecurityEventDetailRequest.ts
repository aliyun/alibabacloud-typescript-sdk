// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityEventDetailRequest extends $dara.Model {
  aliUid?: string;
  eventId?: string;
  callerParentId?: number;
  callerType?: string;
  callerUid?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      eventId: 'EventId',
      callerParentId: 'callerParentId',
      callerType: 'callerType',
      callerUid: 'callerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      eventId: 'string',
      callerParentId: 'number',
      callerType: 'string',
      callerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

