// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHBaseInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @example
   * hb-t4naqsay5gn****
   */
  instanceId?: string;
  /**
   * @example
   * name_test
   */
  instanceName?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBodyInstances extends $dara.Model {
  instance?: ListHBaseInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListHBaseInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBody extends $dara.Model {
  instances?: ListHBaseInstancesResponseBodyInstances;
  /**
   * @example
   * 89F81C30-320B-4550-91DB-C37C81D2358F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: ListHBaseInstancesResponseBodyInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

