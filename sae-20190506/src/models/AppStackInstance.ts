// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppStackInstanceEndpoints } from "./AppStackInstanceEndpoints";
import { AppStackInstanceParameters } from "./AppStackInstanceParameters";


export class AppStackInstance extends $dara.Model {
  /**
   * @example
   * 1706518652
   */
  createTime?: number;
  endpoints?: AppStackInstanceEndpoints[];
  /**
   * @example
   * i-789y
   */
  instanceId?: string;
  /**
   * @example
   * palworld
   */
  instanceName?: string;
  parameters?: AppStackInstanceParameters[];
  /**
   * @example
   * palworld
   */
  stackId?: string;
  /**
   * @example
   * WAIT
   */
  status?: string;
  /**
   * @example
   * 1706518652
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endpoints: 'Endpoints',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      parameters: 'Parameters',
      stackId: 'StackId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endpoints: { 'type': 'array', 'itemType': AppStackInstanceEndpoints },
      instanceId: 'string',
      instanceName: 'string',
      parameters: { 'type': 'array', 'itemType': AppStackInstanceParameters },
      stackId: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

