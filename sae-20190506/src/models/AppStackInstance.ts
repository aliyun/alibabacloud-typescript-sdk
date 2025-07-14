// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppStackInstanceEndpoints extends $dara.Model {
  /**
   * @example
   * 127.0.0.1:8211
   */
  address?: string;
  /**
   * @example
   * game
   */
  name?: string;
  /**
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
   * @example
   * regionId
   */
  name?: string;
  /**
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

