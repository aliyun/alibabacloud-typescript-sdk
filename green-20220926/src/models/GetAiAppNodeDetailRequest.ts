// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppNodeDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2026-01-02 16:08:38
   */
  endTime?: string;
  /**
   * @remarks
   * The node ID. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * node-xxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  nodeName?: string;
  /**
   * @remarks
   * The node type. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * TOOL
   */
  nodeType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2026-01-01 16:08:38
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

