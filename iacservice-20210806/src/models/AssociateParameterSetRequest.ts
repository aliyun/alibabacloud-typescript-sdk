// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateParameterSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  parameterSetIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-433aead756057ffdf5326bf1e12ed
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetIds: 'parameterSetIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSetIds)) {
      $dara.Model.validateArray(this.parameterSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

