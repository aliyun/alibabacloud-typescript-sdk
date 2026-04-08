// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowEndpointRoutingConfig extends $dara.Model {
  /**
   * @remarks
   * 目标工作流版本号
   * 
   * @example
   * 1
   */
  version?: string;
  /**
   * @remarks
   * 该版本在流量分配中的权重，0-100
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

