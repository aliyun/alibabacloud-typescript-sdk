// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTriggerNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the trigger node belongs. You can call [ListProjects](https://help.aliyun.com/document_detail/178393.html) to query the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  appId?: number;
  /**
   * @remarks
   * The timestamp of the business date for the trigger node instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606200230105
   */
  bizDate?: number;
  /**
   * @remarks
   * The 13-digit millisecond-level timestamp that specifies the scheduled time of the node task corresponding to the trigger node.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606200230105
   */
  cycleTime?: number;
  /**
   * @remarks
   * The ID of the trigger node. You can call [ListNodes](https://help.aliyun.com/document_detail/173979.html) to obtain the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000011
   */
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizDate: 'BizDate',
      cycleTime: 'CycleTime',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bizDate: 'number',
      cycleTime: 'number',
      nodeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

