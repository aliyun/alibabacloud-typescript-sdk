// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewTopUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
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
   * This parameter is required.
   * 
   * @example
   * 1583683200
   */
  endTime?: number;
  inerval?: number;
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
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * > This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 1582992000
   */
  startTime?: number;
  /**
   * @remarks
   * The number of URLs to query. Valid values: **1** to **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      inerval: 'Inerval',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      inerval: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

