// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainH2FingerprintRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query the domain names of all websites that are protected by Anti-DDoS Proxy.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * @example
   * 1726318200
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716435180
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      limit: 'Limit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      limit: 'number',
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

