// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignsRequest extends $dara.Model {
  /**
   * @example
   * 2021-10-14 20:59:59
   */
  actualStartTimeFrom?: string;
  /**
   * @example
   * 2021-10-14 20:59:59
   */
  actualStartTimeTo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * test-campaign
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2021-10-14 00:00:00
   */
  planedStartTimeFrom?: string;
  /**
   * @example
   * 2021-10-14 20:59:59
   */
  planedStartTimeTo?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  /**
   * @example
   * Draft
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      actualStartTimeFrom: 'ActualStartTimeFrom',
      actualStartTimeTo: 'ActualStartTimeTo',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planedStartTimeFrom: 'PlanedStartTimeFrom',
      planedStartTimeTo: 'PlanedStartTimeTo',
      queueId: 'QueueId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualStartTimeFrom: 'string',
      actualStartTimeTo: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planedStartTimeFrom: 'string',
      planedStartTimeTo: 'string',
      queueId: 'string',
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

