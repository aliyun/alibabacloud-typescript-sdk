// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeResourcesResponseBodyPagingInfoComputeResourcesComputeResource extends $dara.Model {
  connectionProperties?: any;
  connectionPropertiesMode?: string;
  createTime?: number;
  createUser?: string;
  description?: string;
  id?: number;
  modifyTime?: number;
  modifyUser?: string;
  whetherDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      whetherDefault: 'WhetherDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      whetherDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeResourcesResponseBodyPagingInfoComputeResources extends $dara.Model {
  computeResource?: ListComputeResourcesResponseBodyPagingInfoComputeResourcesComputeResource[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: { 'type': 'array', 'itemType': ListComputeResourcesResponseBodyPagingInfoComputeResourcesComputeResource },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.computeResource)) {
      $dara.Model.validateArray(this.computeResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeResourcesResponseBodyPagingInfo extends $dara.Model {
  computeResources?: ListComputeResourcesResponseBodyPagingInfoComputeResources[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      computeResources: 'ComputeResources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResources: { 'type': 'array', 'itemType': ListComputeResourcesResponseBodyPagingInfoComputeResources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.computeResources)) {
      $dara.Model.validateArray(this.computeResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeResourcesResponseBody extends $dara.Model {
  pagingInfo?: ListComputeResourcesResponseBodyPagingInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListComputeResourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

