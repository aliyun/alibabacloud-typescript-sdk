// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterChecksRequest extends $dara.Model {
  /**
   * @remarks
   * The targets to check.
   * 
   * @example
   * ngw-bp19ay6nnvd4cexxxx
   */
  target?: string;
  /**
   * @remarks
   * The check method.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
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

