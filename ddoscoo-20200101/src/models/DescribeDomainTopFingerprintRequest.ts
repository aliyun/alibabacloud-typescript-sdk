// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopFingerprintRequest extends $dara.Model {
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  limit?: number;
  queryType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      limit: 'Limit',
      queryType: 'QueryType',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      limit: 'number',
      queryType: 'string',
      region: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

