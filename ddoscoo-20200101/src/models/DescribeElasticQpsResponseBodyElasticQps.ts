// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticQpsResponseBodyElasticQps extends $dara.Model {
  /**
   * @remarks
   * The index number of the returned data.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The peak QPS of the normal service.
   * 
   * @example
   * 23
   */
  maxNormalQps?: number;
  /**
   * @remarks
   * The peak inbound QPS.
   * 
   * @example
   * 100
   */
  maxQps?: number;
  /**
   * @remarks
   * The total number of requests during the step size period.
   * 
   * @example
   * 15104
   */
  pv?: number;
  /**
   * @remarks
   * The total number of HTTP 2xx status codes during the step size period.
   * 
   * @example
   * 455
   */
  status2?: number;
  /**
   * @remarks
   * The total number of HTTP 3xx status codes during the step size period.
   * 
   * @example
   * 100
   */
  status3?: number;
  /**
   * @remarks
   * The total number of HTTP 4xx status codes during the step size period.
   * 
   * @example
   * 34
   */
  status4?: number;
  /**
   * @remarks
   * The total number of HTTP 5xx status codes during the step size period.
   * 
   * @example
   * 0
   */
  status5?: number;
  /**
   * @remarks
   * The total number of origin requests during the step size period.
   * 
   * @example
   * 1223
   */
  ups?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      maxNormalQps: 'MaxNormalQps',
      maxQps: 'MaxQps',
      pv: 'Pv',
      status2: 'Status2',
      status3: 'Status3',
      status4: 'Status4',
      status5: 'Status5',
      ups: 'Ups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      maxNormalQps: 'number',
      maxQps: 'number',
      pv: 'number',
      status2: 'number',
      status3: 'number',
      status4: 'number',
      status5: 'number',
      ups: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

