// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseOrgCreateNodeRequest extends $dara.Model {
  appName?: string;
  bizName?: string;
  ext?: { [key: string]: any };
  isOpenApi?: boolean;
  nodeId?: string;
  nodeName?: string;
  nodeType?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  parentNodeId?: string;
  parentNodeType?: string;
  showCompleteInfo?: boolean;
  treeId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizName: 'BizName',
      ext: 'Ext',
      isOpenApi: 'IsOpenApi',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      parentNodeId: 'ParentNodeId',
      parentNodeType: 'ParentNodeType',
      showCompleteInfo: 'ShowCompleteInfo',
      treeId: 'TreeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizName: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isOpenApi: 'boolean',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      parentNodeId: 'string',
      parentNodeType: 'string',
      showCompleteInfo: 'boolean',
      treeId: 'number',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

