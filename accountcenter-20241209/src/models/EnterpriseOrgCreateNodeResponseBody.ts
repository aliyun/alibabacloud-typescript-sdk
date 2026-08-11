// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseOrgCreateNodeResponseBodyData extends $dara.Model {
  gmtCreate?: string;
  id?: number;
  nodeId?: string;
  nodeName?: string;
  nodeType?: string;
  parentNodeId?: string;
  parentNodeType?: string;
  treeId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      parentNodeId: 'ParentNodeId',
      parentNodeType: 'ParentNodeType',
      treeId: 'TreeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      id: 'number',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      parentNodeId: 'string',
      parentNodeType: 'string',
      treeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseOrgCreateNodeResponseBody extends $dara.Model {
  code?: string;
  data?: EnterpriseOrgCreateNodeResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnterpriseOrgCreateNodeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

