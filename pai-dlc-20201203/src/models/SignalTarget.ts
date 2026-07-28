// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignalTarget extends $dara.Model {
  /**
   * @remarks
   * The pod name. Required when Scope is set to pods.
   */
  podNames?: string[];
  /**
   * @remarks
   * The role information. Required when Scope is set to roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The send scope.
   * 
   * @example
   * pods
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      podNames: 'PodNames',
      roles: 'Roles',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podNames: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podNames)) {
      $dara.Model.validateArray(this.podNames);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

