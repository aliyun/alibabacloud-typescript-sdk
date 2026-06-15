// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssV2ResultRequest extends $dara.Model {
  bucket?: string;
  currentPage?: number;
  endDate?: string;
  pageSize?: number;
  riskLevel?: string;
  startDate?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      startDate: 'StartDate',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      riskLevel: 'string',
      startDate: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

