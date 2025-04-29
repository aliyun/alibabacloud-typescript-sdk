// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModelsResponseBodyModelDetails } from "./DescribeModelsResponseBodyModelDetails";


export class DescribeModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about models. It is an array consisting of ModelDetail data.
   */
  modelDetails?: DescribeModelsResponseBodyModelDetails;
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40306469-2FB5-417A-B723-AF1F4A4FA204
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modelDetails: 'ModelDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelDetails: DescribeModelsResponseBodyModelDetails,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.modelDetails && typeof (this.modelDetails as any).validate === 'function') {
      (this.modelDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

