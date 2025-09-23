// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainOverviewRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 1651809600
   */
  endTime?: number;
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1619798400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
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

