// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDefenseRecordsResponseBodyDefenseRecords } from "./DescribeDefenseRecordsResponseBodyDefenseRecords";


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

