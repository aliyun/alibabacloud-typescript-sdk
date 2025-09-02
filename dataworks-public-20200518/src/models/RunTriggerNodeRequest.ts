// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTriggerNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the manually triggered node belongs. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  appId?: number;
  /**
   * @remarks
   * The data timestamp of the instance that is generated for the manually triggered node.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606200230105
   */
  bizDate?: number;
  /**
   * @remarks
   * The scheduling time to run the manually triggered node. Set the value to a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606200230105
   */
  cycleTime?: number;
  /**
   * @remarks
   * The ID of the manually triggered node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID.
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

