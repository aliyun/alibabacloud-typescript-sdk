// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotNodeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  isOutput?: number;
  modelName?: string;
  /**
   * @example
   * 123456
   */
  nodeIdentifier?: string;
  nodeName?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      isOutput: 'IsOutput',
      modelName: 'ModelName',
      nodeIdentifier: 'NodeIdentifier',
      nodeName: 'NodeName',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOutput: 'number',
      modelName: 'string',
      nodeIdentifier: 'string',
      nodeName: 'string',
      processName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

