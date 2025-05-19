// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMyGroupsResponseBodyResources } from "./ListMyGroupsResponseBodyResources";


export class ListMyGroupsResponseBody extends $dara.Model {
  errorCode?: number;
  errorMessage?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: ListMyGroupsResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: ListMyGroupsResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

