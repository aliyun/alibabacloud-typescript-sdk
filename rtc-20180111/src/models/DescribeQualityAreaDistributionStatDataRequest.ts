// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityAreaDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * The name of the parent region. For example, the parent region of Hangzhou is Zhejiang Province, and the parameter is set to China_Zhejiang Province. If this parameter is left empty, the statistics are collected at the country level worldwide, such as China and the United Kingdom.
   * 
   * @example
   * China_Zhejiang Province
   */
  parentArea?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      parentArea: 'string',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

