// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeStatusListResponseBodyNodeStatusList } from "./NodeStatusListResponseBodyNodeStatusList";


export class NodeStatusListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * InstanceIds is mandatory for this action.
   */
  errorMessage?: string;
  nodeStatusList?: NodeStatusListResponseBodyNodeStatusList;
  /**
   * @example
   * 1BB8FE8E-9BBE-490F-82EC-BF70FB849D55
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      nodeStatusList: 'NodeStatusList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      nodeStatusList: NodeStatusListResponseBodyNodeStatusList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nodeStatusList && typeof (this.nodeStatusList as any).validate === 'function') {
      (this.nodeStatusList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

