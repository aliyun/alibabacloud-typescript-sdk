// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenTrendRequest extends $dara.Model {
  endTime?: string;
  groupBy?: string;
  instanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupBy: 'string',
      instanceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

