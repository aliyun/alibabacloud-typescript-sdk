// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList } from "./DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList";


export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList extends $dara.Model {
  /**
   * @remarks
   * The details of data synchronization tasks in each direction.
   */
  synchronizationDirectionInfoList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList[];
  /**
   * @remarks
   * The ID of the data synchronization instance.
   * 
   * @example
   * dtsexjk1alb116****
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationDirectionInfoList: 'SynchronizationDirectionInfoList',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationDirectionInfoList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList },
      synchronizationJobId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.synchronizationDirectionInfoList)) {
      $dara.Model.validateArray(this.synchronizationDirectionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

