// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who creates the deployment.
   * 
   * @example
   * 183899668*******
   */
  creator?: string;
  /**
   * @remarks
   * The execution mode of the deployment.
   * 
   * Valid values:
   * 
   * *   BATCH
   * *   STREAMING
   * 
   * @example
   * STREAMING
   */
  executionMode?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  labelKey?: string;
  /**
   * @remarks
   * The tag value. Separate multiple values with semicolon (;).
   * 
   * @example
   * value1,value2
   */
  labelValueArray?: string;
  /**
   * @remarks
   * The ID of the user who modifies the deployment.
   * 
   * @example
   * 183899668*******
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the deployment.
   * 
   * @example
   * vvp_ds_0522
   */
  name?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  sortName?: string;
  /**
   * @remarks
   * The latest status of the deployment.
   * 
   * Valid values:
   * 
   * *   CANCELLED
   * *   FAILED
   * *   RUNNING
   * *   TRANSITIONING
   * *   FINISHED
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

