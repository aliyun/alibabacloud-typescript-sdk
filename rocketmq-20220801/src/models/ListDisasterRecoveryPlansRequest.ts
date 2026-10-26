// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Filters backup plans by backup name or backup description.
   * 
   * @example
   * xxx
   */
  filter?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-c97xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
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

