// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRecordsResponseBodyDefenseRecords extends $dara.Model {
  /**
   * @remarks
   * The peak attack traffic. Unit: bit/s.
   * 
   * @example
   * 6584186000
   */
  attackPeak?: number;
  /**
   * @remarks
   * The end time of the advanced mitigation session. This value is a UNIX timestamp. Units: miliseconds.
   * 
   * @example
   * 1583683200000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 2
   */
  eventCount?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the advanced mitigation session. This value is a UNIX timestamp. Units: miliseconds.
   * 
   * @example
   * 1582992000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the advanced mitigation session. Valid values:
   * 
   * *   **0**: The advanced mitigation session is being used.
   * *   **1**: The advanced mitigation session is used.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * An array that consists of details of the log of an advanced mitigation session.
   */
  defenseRecords?: DescribeDefenseRecordsResponseBodyDefenseRecords[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of advanced mitigation sessions.
   * 
   * @example
   * 1
   */
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

