// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainLogsResponseBodyDomainLogsDomainLog extends $dara.Model {
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * Add
   */
  action?: string;
  /**
   * @remarks
   * The time when the operation is performed. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  actionTime?: string;
  /**
   * @remarks
   * The time when the operation was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 143562300000
   */
  actionTimestamp?: number;
  /**
   * @remarks
   * The IP address of the operator.
   * 
   * @example
   * 182.92.253.20
   */
  clientIp?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * abc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The message for the operation.
   * 
   * @example
   * To the DNS record list
   */
  message?: string;
  /**
   * @remarks
   * The ID of the private zone.
   * 
   * @example
   * cxfd345sd234
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      actionTimestamp: 'ActionTimestamp',
      clientIp: 'ClientIp',
      domainName: 'DomainName',
      message: 'Message',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'string',
      actionTimestamp: 'number',
      clientIp: 'string',
      domainName: 'string',
      message: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

