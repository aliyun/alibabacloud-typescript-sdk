// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Default value: empty. Valid values:
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The page number to return in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The source of the traffic statistics. Default value: Internet firewall. Valid values:
   * 
   * @example
   * nat
   */
  dataType?: string;
  /**
   * @remarks
   * The domain name of the outbound connections.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to collect statistics only on traffic that accesses AI services. Default value: no. Valid values:
   * 
   * @example
   * true
   */
  isAITraffic?: string;
  /**
   * @remarks
   * The language type of the request message. Valid values:
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort method. Valid values:
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The public IP address of the ECS instance that initiates the outbound connection.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The sort order based on the specified field. Valid values:
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @remarks
   * The intelligence tag ID. Valid values:
   * 
   * @example
   * AliYun
   */
  tagIdNew?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      currentPage: 'CurrentPage',
      dataType: 'DataType',
      domain: 'Domain',
      endTime: 'EndTime',
      isAITraffic: 'IsAITraffic',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      publicIP: 'PublicIP',
      sort: 'Sort',
      startTime: 'StartTime',
      tagIdNew: 'TagIdNew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      currentPage: 'string',
      dataType: 'string',
      domain: 'string',
      endTime: 'string',
      isAITraffic: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      publicIP: 'string',
      sort: 'string',
      startTime: 'string',
      tagIdNew: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

