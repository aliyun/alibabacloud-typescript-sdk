// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainPvDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-15T15:59:59Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-10T17:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
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

