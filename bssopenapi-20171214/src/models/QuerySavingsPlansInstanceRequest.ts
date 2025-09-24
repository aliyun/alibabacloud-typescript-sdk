// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySavingsPlansInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to query.
   * 
   * @example
   * ecs
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to query.
   * 
   * @example
   * 001
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceRequest extends $dara.Model {
  commodityCode?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the savings plan instance.
   * 
   * @example
   * spn-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the return data. Valid values:
   * 
   * *   ZH: Chinese
   * *   EN: English
   * 
   * @example
   * ZH
   */
  locale?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the Instance. 
   * 
   * *  NORMAL
   * * RELEASE
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: QuerySavingsPlansInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      locale: 'Locale',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      endTime: 'string',
      instanceId: 'string',
      locale: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

