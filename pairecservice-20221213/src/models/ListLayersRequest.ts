// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLayersRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can obtain this ID by calling the ListInstances API.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The laboratory ID. You can obtain this ID by calling the ListLaboratories API.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      laboratoryId: 'LaboratoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      laboratoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

