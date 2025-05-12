// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopOversoldGroupSaleRequest extends $dara.Model {
  concurrenceCount?: number;
  oversoldGroupId?: string;
  oversoldUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      oversoldGroupId: 'OversoldGroupId',
      oversoldUserCount: 'OversoldUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      oversoldGroupId: 'string',
      oversoldUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

