// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AicsOpenApiInvokeRequest extends $dara.Model {
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
  param?: { [key: string]: any };
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
      param: 'Param',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      nodeId: 'string',
      param: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      serviceId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.param) {
      $dara.Model.validateMap(this.param);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

