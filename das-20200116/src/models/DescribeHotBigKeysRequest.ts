// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHotBigKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB for Redis instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard on the ApsaraDB for Redis instance.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

