// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIJobRunDetailsResponseBodyPagingInfoJobRunInfos } from "./ListDijobRunDetailsResponseBodyPagingInfoJobRunInfos";


export class ListDIJobRunDetailsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The running information about the synchronization task.
   */
  jobRunInfos?: ListDIJobRunDetailsResponseBodyPagingInfoJobRunInfos[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 131
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobRunInfos: 'JobRunInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRunInfos: { 'type': 'array', 'itemType': ListDIJobRunDetailsResponseBodyPagingInfoJobRunInfos },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobRunInfos)) {
      $dara.Model.validateArray(this.jobRunInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

