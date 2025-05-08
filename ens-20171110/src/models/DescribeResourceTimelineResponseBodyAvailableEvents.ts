// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceTimelineResponseBodyAvailableEvents extends $dara.Model {
  name?: string;
  occurrenceTime?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      occurrenceTime: 'OccurrenceTime',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      occurrenceTime: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

