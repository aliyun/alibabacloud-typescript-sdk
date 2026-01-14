// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance that you want to query.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The accelerated domain name that you want to query.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
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
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ICP filing status of the accelerated domain name that you want to query. Valid values:
   * 
   * *   **illegal:** The domain name is illegal.
   * *   **inactive:** The domain name has not completed ICP filing.
   * *   **active:** The domain name has a valid ICP filing.
   * *   **unknown:** The ICP filing status is unknown.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      domain: 'Domain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      domain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

