// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataTrendResponseBodyDataItemList extends $dara.Model {
  /**
   * @remarks
   * The statistical values of the trend data.
   */
  countList?: number[];
  /**
   * @remarks
   * The type of the security data. Valid values:
   * 
   * *   **HC_NEW**: the number of new baseline risks.
   * *   **HC_OPERATE**: the number of handled baseline risks.
   * *   **VUL_NEW**: the number of new vulnerabilities.
   * *   **VUL_OPERATE**: the number of handled vulnerabilities.
   * *   **SUSP_NEW**: the number of new alerts.
   * *   **SUSP_OPERATE**: the number of handled alerts.
   * 
   * @example
   * HC_NEW
   */
  keyName?: string;
  static names(): { [key: string]: string } {
    return {
      countList: 'CountList',
      keyName: 'KeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countList: { 'type': 'array', 'itemType': 'number' },
      keyName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.countList)) {
      $dara.Model.validateArray(this.countList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The statistical timestamps of the trend data.
   */
  dateList?: number[];
  /**
   * @remarks
   * The statistical dates and time for the trend data.
   */
  dateStrList?: string[];
  /**
   * @remarks
   * The returned data.
   */
  itemList?: GetDataTrendResponseBodyDataItemList[];
  static names(): { [key: string]: string } {
    return {
      dateList: 'DateList',
      dateStrList: 'DateStrList',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateList: { 'type': 'array', 'itemType': 'number' },
      dateStrList: { 'type': 'array', 'itemType': 'string' },
      itemList: { 'type': 'array', 'itemType': GetDataTrendResponseBodyDataItemList },
    };
  }

  validate() {
    if(Array.isArray(this.dateList)) {
      $dara.Model.validateArray(this.dateList);
    }
    if(Array.isArray(this.dateStrList)) {
      $dara.Model.validateArray(this.dateStrList);
    }
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetDataTrendResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataTrendResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

