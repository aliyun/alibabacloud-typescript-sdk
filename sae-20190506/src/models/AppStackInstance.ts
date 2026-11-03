// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppStackInstanceEndpoints extends $dara.Model {
  /**
   * @remarks
   * The address and port.
   * 
   * @example
   * 127.0.0.1:8211
   */
  address?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * game
   */
  name?: string;
  /**
   * @remarks
   * The endpoint protocol.
   * 
   * @example
   * UDP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackInstanceParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * regionId
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1706518652
   */
  createTime?: number;
  /**
   * @remarks
   * The endpoints.
   */
  endpoints?: AppStackInstanceEndpoints[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-789y
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * palworld
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance parameters.
   */
  parameters?: AppStackInstanceParameters[];
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * palworld
   */
  stackId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * WAIT
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
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

