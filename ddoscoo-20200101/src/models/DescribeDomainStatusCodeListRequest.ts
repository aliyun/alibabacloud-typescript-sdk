// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatusCodeListRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website. If you do not specify this parameter, the statistics on response status codes of all domain names are queried.
   * 
   * > A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * > This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * @example
   * 1583683200
   */
  endTime?: number;
  /**
   * @remarks
   * The interval for returning data. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  interval?: number;
  /**
   * @remarks
   * The source of the statistics. Valid values:
   * 
   * *   **gf**: Anti-DDoS Pro or Anti-DDoS Premium
   * *   **upstrem**: origin server
   * 
   * This parameter is required.
   * 
   * @example
   * gf
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the event. The value is a UNIX timestamp. Unit: seconds.
   * 
   * > This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
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

