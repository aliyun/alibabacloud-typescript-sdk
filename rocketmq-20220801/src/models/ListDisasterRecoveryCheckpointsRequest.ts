// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryCheckpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. The maximum number of results to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      instanceId: 'string',
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

