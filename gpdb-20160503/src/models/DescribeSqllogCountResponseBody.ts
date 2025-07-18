// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogCountResponseBodyItemsSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The time when the audit logs were generated and the number of the audit logs.
   */
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.point)) {
      $dara.Model.validateArray(this.point);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBodyItemsSeries extends $dara.Model {
  /**
   * @remarks
   * Details of the audit logs.
   */
  values?: DescribeSQLLogCountResponseBodyItemsSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeriesValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * gp-xxxxxxxx
   */
  name?: string;
  /**
   * @remarks
   * Details of the audit logs.
   */
  series?: DescribeSQLLogCountResponseBodyItemsSeries[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeries },
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-xxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2020-12-14T11:22Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the instance.
   */
  items?: DescribeSQLLogCountResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7565770E-7C45-462D-BA4A-8A**********
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2020-12-12T11:22Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      items: 'Items',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItems },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

