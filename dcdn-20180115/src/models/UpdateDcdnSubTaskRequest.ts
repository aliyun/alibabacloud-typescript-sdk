// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDcdnSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names that you want to include in the operations report. If you do not specify a domain name, all domain names that belong to your Alibaba Cloud account are included.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the operations report. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-06-17T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IDs of the metrics that you want to update. Separate IDs with commas (,). You can call the [DescribeDcdnSubList](https://help.aliyun.com/document_detail/270075.html) operation to query the IDs.
   * 
   * @example
   * 2,4,6
   */
  reportIds?: string;
  /**
   * @remarks
   * The start time of the operations report. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-04-17T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      reportIds: 'ReportIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      reportIds: 'string',
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

