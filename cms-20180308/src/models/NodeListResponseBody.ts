// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeListResponseBodyNodes } from "./NodeListResponseBodyNodes";


export class NodeListResponseBody extends $dara.Model {
  errorCode?: number;
  errorMessage?: string;
  nodes?: NodeListResponseBodyNodes;
  pageNumber?: number;
  pageSize?: number;
  pageTotal?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      nodes: NodeListResponseBodyNodes,
      pageNumber: 'number',
      pageSize: 'number',
      pageTotal: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

