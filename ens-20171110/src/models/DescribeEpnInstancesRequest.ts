// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 2017-11-10
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The name of the EPN instance.
   * 
   * @example
   * testEPNInstanceName
   */
  EPNInstanceName?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

