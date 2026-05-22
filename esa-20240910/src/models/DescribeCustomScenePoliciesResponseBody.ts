// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomScenePoliciesResponseBodyDataModule extends $dara.Model {
  endTime?: string;
  name?: string;
  objects?: string[];
  policyId?: number;
  siteIds?: string;
  startTime?: string;
  status?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      siteIds: 'SiteIds',
      startTime: 'StartTime',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      siteIds: 'string',
      startTime: 'string',
      status: 'string',
      template: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomScenePoliciesResponseBody extends $dara.Model {
  dataModule?: DescribeCustomScenePoliciesResponseBodyDataModule[];
  pageNumber?: number;
  pageSize?: number;
  quota?: number;
  requestId?: string;
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

