// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRecordsResponseBodyDefenseRecords extends $dara.Model {
  attackPeak?: number;
  endTime?: number;
  eventCount?: number;
  instanceId?: string;
  startTime?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      attackPeak: 'AttackPeak',
      endTime: 'EndTime',
      eventCount: 'EventCount',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPeak: 'number',
      endTime: 'number',
      eventCount: 'number',
      instanceId: 'string',
      startTime: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsResponseBody extends $dara.Model {
  defenseRecords?: DescribeDefenseRecordsResponseBodyDefenseRecords[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseRecords: 'DefenseRecords',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseRecords: { 'type': 'array', 'itemType': DescribeDefenseRecordsResponseBodyDefenseRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.defenseRecords)) {
      $dara.Model.validateArray(this.defenseRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

