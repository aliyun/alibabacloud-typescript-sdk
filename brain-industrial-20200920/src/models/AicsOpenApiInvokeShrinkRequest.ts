// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AicsOpenApiInvokeShrinkRequest extends $dara.Model {
  jobId?: string;
  /**
   * @example
   * 119397
   */
  nodeId?: string;
  /**
   * @example
   * {"a":1}
   */
  paramShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ae5f9884c9914ed7af72b07e6c1616f9
   */
  serviceId?: string;
  /**
   * @example
   * EXPERIMENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      nodeId: 'NodeId',
      paramShrink: 'Param',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      nodeId: 'string',
      paramShrink: 'string',
      serviceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

