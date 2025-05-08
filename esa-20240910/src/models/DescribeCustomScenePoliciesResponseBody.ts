// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomScenePoliciesResponseBodyDataModule } from "./DescribeCustomScenePoliciesResponseBodyDataModule";


export class DescribeCustomScenePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scenario-specific policies.
   */
  dataModule?: DescribeCustomScenePoliciesResponseBodyDataModule[];
  /**
   * @remarks
   * The page number.
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
   * The policy quota.
   * 
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      quota: 'Quota',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeCustomScenePoliciesResponseBodyDataModule },
      pageNumber: 'number',
      pageSize: 'number',
      quota: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

