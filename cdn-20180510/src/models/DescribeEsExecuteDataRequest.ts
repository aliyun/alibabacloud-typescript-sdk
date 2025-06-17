// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEsExecuteDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-02-18T20:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the rule. You can call the [DescribeCdnDomainConfigs](https://help.aliyun.com/document_detail/90924.html) operation to query script IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 212896**
   */
  ruleId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-02-17T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ruleId: 'RuleId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ruleId: 'string',
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

