// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeUpDownStreamRequestNodeId extends $dara.Model {
  /**
   * @example
   * 12
   */
  fieldIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11313
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeId?: GetNodeUpDownStreamRequestNodeId;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 113123
   */
  projectId?: number;
  /**
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      nodeId: 'NodeId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      nodeId: GetNodeUpDownStreamRequestNodeId,
      opTenantId: 'number',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  validate() {
    if(this.nodeId && typeof (this.nodeId as any).validate === 'function') {
      (this.nodeId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

