// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeNumberPreCheckResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the number of nodes can be modified.
   * 
   * @example
   * true
   */
  allow?: boolean;
  /**
   * @remarks
   * The reason why the number of nodes cannot be modified.
   * 
   * @example
   * Failed to find node group[ng-3d5ce6454354****].
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'boolean',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

