// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of Lingjun
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-bj-uo8f26cpmo
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

