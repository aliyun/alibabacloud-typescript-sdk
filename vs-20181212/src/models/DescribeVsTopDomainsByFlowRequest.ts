// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsTopDomainsByFlowRequest extends $dara.Model {
  /**
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3
   */
  limit?: number;
  ownerId?: number;
  /**
   * @example
   * 2021-12-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      ownerId: 'number',
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

