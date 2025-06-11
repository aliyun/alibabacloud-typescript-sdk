// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersHistoryResponseBodyRespondParameters } from "./DescribeParametersHistoryResponseBodyRespondParameters";


export class DescribeParametersHistoryResponseBodyRespond extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.    
   * - Start value: 1   
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The information about parameters.
   */
  parameters?: DescribeParametersHistoryResponseBodyRespondParameters[];
  /**
   * @remarks
   * The total count, which takes effect in a pagination query.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      parameters: 'Parameters',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      parameters: { 'type': 'array', 'itemType': DescribeParametersHistoryResponseBodyRespondParameters },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

