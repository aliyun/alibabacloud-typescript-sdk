// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesResponseBodyItems extends $dara.Model {
  currentRiskLevel?: number;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  maxCategoryLevel?: number;
  maxRiskLevel?: number;
  name?: string;
  status?: number;
  supportEdit?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      currentRiskLevel: 'CurrentRiskLevel',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      maxCategoryLevel: 'MaxCategoryLevel',
      maxRiskLevel: 'MaxRiskLevel',
      name: 'Name',
      status: 'Status',
      supportEdit: 'SupportEdit',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRiskLevel: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      maxCategoryLevel: 'number',
      maxRiskLevel: 'number',
      name: 'string',
      status: 'number',
      supportEdit: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $dara.Model {
  currentPage?: number;
  items?: ListTemplatesResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListTemplatesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

