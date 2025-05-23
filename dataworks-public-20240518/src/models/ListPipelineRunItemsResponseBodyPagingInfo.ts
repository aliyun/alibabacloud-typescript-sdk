// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems } from "./ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems";


export class ListPipelineRunItemsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  pipelineRunItems?: ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems[];
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineRunItems: 'PipelineRunItems',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineRunItems: { 'type': 'array', 'itemType': ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRunItems)) {
      $dara.Model.validateArray(this.pipelineRunItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

