// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $dara.Model {
  /**
   * @remarks
   * The effect.
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The relationship between the key name and the key value.
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The key value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      operator: 'string',
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

export class UpdateResourceRequestSelfManagedResourceOptions extends $dara.Model {
  /**
   * @remarks
   * The set of label key-value pairs for nodes.
   * 
   * @example
   * "key1": "value1"
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * The list of tolerations for node taints.
   */
  nodeTolerations?: UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  static names(): { [key: string]: string } {
    return {
      nodeMatchLabels: 'NodeMatchLabels',
      nodeTolerations: 'NodeTolerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeMatchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nodeTolerations: { 'type': 'array', 'itemType': UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations },
    };
  }

  validate() {
    if(this.nodeMatchLabels) {
      $dara.Model.validateMap(this.nodeMatchLabels);
    }
    if(Array.isArray(this.nodeTolerations)) {
      $dara.Model.validateArray(this.nodeTolerations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The new name of the resource group. The name cannot exceed 27 characters in length.
   * 
   * @example
   * iot
   */
  resourceName?: string;
  /**
   * @remarks
   * The configuration options for the self-managed resource group.
   */
  selfManagedResourceOptions?: UpdateResourceRequestSelfManagedResourceOptions;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      selfManagedResourceOptions: UpdateResourceRequestSelfManagedResourceOptions,
    };
  }

  validate() {
    if(this.selfManagedResourceOptions && typeof (this.selfManagedResourceOptions as any).validate === 'function') {
      (this.selfManagedResourceOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

