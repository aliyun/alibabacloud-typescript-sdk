// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceDbMonitorResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The time point when the value of monitoring data was obtained. The value is in the UNIX timestamp format. Unit: ms.
   * 
   * @example
   * 1603162805000
   */
  date?: number;
  /**
   * @remarks
   * The data value.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
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

export class DescribeDrdsInstanceDbMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the monitoring metric.
   * 
   * @example
   * qps
   */
  key?: string;
  /**
   * @remarks
   * The unit of the monitoring metric.
   * 
   * @example
   * qps
   */
  unit?: string;
  /**
   * @remarks
   * The details about the value of monitoring data.
   */
  values?: DescribeDrdsInstanceDbMonitorResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyDataValues },
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

export class DescribeDrdsInstanceDbMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring data.
   */
  data?: DescribeDrdsInstanceDbMonitorResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

