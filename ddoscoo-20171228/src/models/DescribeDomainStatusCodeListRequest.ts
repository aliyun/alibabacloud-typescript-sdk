// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatusCodeListRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 1583683200
   */
  endTime?: number;
  /**
   * @example
   * 1800
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * upstream
   */
  queryType?: string;
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1582992000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      queryType: 'QueryType',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      queryType: 'string',
      resourceGroupId: 'string',
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

