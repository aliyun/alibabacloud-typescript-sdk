// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdnDeliverTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The method that is used to send operations reports. Operations reports are sent to you only by email. The settings must be escaped in JSON.
   * 
   * This parameter is required.
   * 
   * @example
   * {"email":{"subject":"the email subject","to":["username@example.com","username@example.org"]}}
   */
  deliver?: string;
  /**
   * @remarks
   * The domain names to be tracked. Separate multiple domain names with commas (,). You can specify up to 500 domain names. If you want to specify more than 500 domain names, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * 
   * > If you do not specify a domain name, the tracking task is created for all domain names that belong to your Alibaba Cloud account.
   * 
   * @example
   * www.example1.com,www.example2.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the tracking task.
   * 
   * This parameter is required.
   * 
   * @example
   * Domain name report
   */
  name?: string;
  /**
   * @remarks
   * The operations reports that are tracked by the task. The data must be escaped in JSON.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\\\"reportId\\\\":1,\\\\"conditions\\\\":[{\\\\"field\\\\":\\\\"prov\\\\",\\\\"op\\\\":\\\\"in\\\\",\\\\"value\\\\":[\\\\"Heilongjiang\\\\",\\\\"Beijing\\\\"]}]}]
   */
  reports?: string;
  /**
   * @remarks
   * The parameters that specify the time interval at which the tracking task sends operations reports. The settings must be escaped in JSON.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\\\"schedName\\\\":\\\\"The name of the tracking task\\\\",\\\\"description\\\\":\\\\"The description\\\\",\\\\"crontab\\\\":\\\\"000\\*\\*?\\\\",\\\\"frequency\\\\":\\\\"d\\\\",\\\\"status\\\\":\\\\"enable\\\\",\\\\"effectiveFrom\\\\":\\\\"2020-09-17T00:00:00Z\\\\",\\\\"effectiveEnd\\\\":\\\\"2020-11-17T00:00:00Z\\\\"}"
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      deliver: 'Deliver',
      domainName: 'DomainName',
      name: 'Name',
      reports: 'Reports',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliver: 'string',
      domainName: 'string',
      name: 'string',
      reports: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

