// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCdnSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that you want to track. You can specify up to 500 domain names in each request. If you specify multiple domain names, separate them with commas (,). If you do not specify a domain name, operations reports are updated for all domain names in your Alibaba Cloud account.
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
   * 2020-11-17T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IDs of operations reports that you want to update. Separate IDs with commas (,).
   * 
   * @example
   * 1,2,3
   */
  reportIds?: string;
  /**
   * @remarks
   * The start time of the operations report. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-09-17T00:00:00Z
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

