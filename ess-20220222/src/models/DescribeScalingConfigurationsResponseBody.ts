// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingConfigurationsResponseBodyScalingConfigurations } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurations";


export class DescribeScalingConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The scaling configurations.
   */
  scalingConfigurations?: DescribeScalingConfigurationsResponseBodyScalingConfigurations[];
  /**
   * @remarks
   * The total number of scaling configurations.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingConfigurations: 'ScalingConfigurations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingConfigurations: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurations },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingConfigurations)) {
      $dara.Model.validateArray(this.scalingConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

