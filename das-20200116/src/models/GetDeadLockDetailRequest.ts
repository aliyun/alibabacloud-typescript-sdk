// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadLockDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > Required for PolarDB for MySQL cluster instances.
   * 
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  /**
   * @remarks
   * The source of the analysis task:
   * 
   * - **MANUAL** or **not specified**: queries the recent deadlock analysis task.
   * 
   * - **AUTO**: queries the full deadlock analysis task.
   * 
   * @example
   * AUTO
   */
  source?: string;
  /**
   * @remarks
   * The ID of the deadlock text. This value is returned from the GetDeadLockHistory operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a0e390cd5aca9ae964448f040153****
   */
  textId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      source: 'Source',
      textId: 'TextId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      source: 'string',
      textId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

