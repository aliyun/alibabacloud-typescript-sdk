// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDebugExecutionRequest extends $dara.Model {
  /**
   * @example
   * abcde3OARpx77No54nv6
   */
  clientToken?: string;
  /**
   * @example
   * {"Service": "ecs", "API": "DescribeRegions"}
   */
  properties?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ACS::ExecuteAPI
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      properties: 'Properties',
      regionId: 'RegionId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      properties: 'string',
      regionId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

