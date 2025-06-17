// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCdnDeliverTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The method that is used to send operations reports. Operations reports are sent to you only by email. The settings must be escaped in JSON.
   * 
   * @example
   * {\\\\"email\\\\":{\\\\"subject\\\\":\\\\"The email subject\\\\",\\\\"to\\\\":[\\\\"songmingyuan@alibaba-inc.com\\\\",\\\\"songmingyuan@alibaba-inc.com\\\\"]}}"
   */
  deliver?: string;
  /**
   * @remarks
   * The ID of the tracking task that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  deliverId?: number;
  /**
   * @remarks
   * The domain name that you want to track. You can specify up to 500 domain names in each request. Separate multiple domain names with commas (,). If you do not specify a domain name, the task collects data from all domain names that belong to your Alibaba Cloud account.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the tracking task.
   * 
   * @example
   * Domain name report
   */
  name?: string;
  /**
   * @remarks
   * The operations reports that are tracked by the task. The data must be escaped in JSON.
   * 
   * @example
   * [{\\\\"reportId\\\\":1,\\\\"conditions\\\\":[{\\\\"field\\\\":\\\\"prov\\\\",\\\\"op\\\\":\\\\"in\\\\",\\\\"value\\\\":[\\\\"Heilongjiang\\\\",\\\\"Beijing\\\\"]}]}]
   */
  reports?: string;
  /**
   * @remarks
   * The parameters that specify the time interval at which the tracking task sends operations reports. The settings must be escaped in JSON.
   * 
   * @example
   * "{\\\\"schedName\\\\":\\\\"The name of the tracking task\\\\",\\\\"description\\\\":\\\\"The description\\\\",\\\\"crontab\\\\":\\\\"000\\*\\*?\\\\",\\\\"frequency\\\\":\\\\"d\\\\",\\\\"status\\\\":\\\\"enable\\\\",\\\\"effectiveFrom\\\\":\\\\"2020-09-17T00:00:00Z\\\\",\\\\"effectiveEnd\\\\":\\\\"2020-11-17T00:00:00Z\\\\"}"
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      deliver: 'Deliver',
      deliverId: 'DeliverId',
      domainName: 'DomainName',
      name: 'Name',
      reports: 'Reports',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliver: 'string',
      deliverId: 'number',
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

