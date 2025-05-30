// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResourceUsageResponseBodyDataJobResourceUsageList extends $dara.Model {
  /**
   * @remarks
   * The total number of used compute units (CUs).
   * 
   * @example
   * 1185100
   */
  cuUsage?: number;
  /**
   * @remarks
   * The start date of the query in the format of yyyy-MM-dd.
   * 
   * @example
   * 2023-05-09
   */
  date?: string;
  /**
   * @remarks
   * The job executor.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The total memory usage.
   * 
   * @example
   * 15169536
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The quota nickname.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      date: 'date',
      jobOwner: 'jobOwner',
      memoryUsage: 'memoryUsage',
      quotaNickname: 'quotaNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      date: 'string',
      jobOwner: 'string',
      memoryUsage: 'number',
      quotaNickname: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

