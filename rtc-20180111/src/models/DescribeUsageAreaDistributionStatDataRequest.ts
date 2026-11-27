// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageAreaDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query, expressed as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: string;
  /**
   * @remarks
   * The parent region name. For example, the parent of Hangzhou City is Zhejiang Province, and the parameter should be set to China_Zhejiang Province. An empty parameter indicates statistics at the global scope (country dimension), such as China or the United Kingdom.
   * 
   * @example
   * 中国_浙江省
   */
  parentArea?: string;
  /**
   * @remarks
   * The start time of the query, expressed as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: string;
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
      endDate: 'string',
      parentArea: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

