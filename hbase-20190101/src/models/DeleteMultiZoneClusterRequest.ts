// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultiZoneClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d-t4nn71xa0yn56****
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  immediateDeleteFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      immediateDeleteFlag: 'ImmediateDeleteFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      immediateDeleteFlag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

