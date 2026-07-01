// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentsRequest extends $dara.Model {
  /**
   * @remarks
   * Creator UID.
   * 
   * @example
   * 183899668*******
   */
  creator?: string;
  /**
   * @remarks
   * Deployment execution mode.
   * 
   * @example
   * STREAMING
   */
  executionMode?: string;
  /**
   * @remarks
   * Label name.
   * 
   * @example
   * key
   */
  labelKey?: string;
  /**
   * @remarks
   * Tag values. Multiple values are separated by semicolons.
   * 
   * @example
   * value1,value2
   */
  labelValueArray?: string;
  /**
   * @remarks
   * Modifier UID.
   * 
   * @example
   * 183899668*******
   */
  modifier?: string;
  /**
   * @remarks
   * Deployment name.
   * 
   * @example
   * vvp_ds_0522
   */
  name?: string;
  /**
   * @remarks
   * Pagination parameter. Page index indicating the requested page number. Minimum value is 1. Default value is 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Pagination parameter. Number of elements on the requested page. Maximum value is 100, minimum value is 1, and default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Sorting method. Supports returning data in descending order by creation time or updated time.
   * 
   * @example
   * gmt_create
   */
  sortName?: string;
  /**
   * @remarks
   * The status of the latest job for the deployment.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      executionMode: 'executionMode',
      labelKey: 'labelKey',
      labelValueArray: 'labelValueArray',
      modifier: 'modifier',
      name: 'name',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      sortName: 'sortName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      executionMode: 'string',
      labelKey: 'string',
      labelValueArray: 'string',
      modifier: 'string',
      name: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      sortName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

