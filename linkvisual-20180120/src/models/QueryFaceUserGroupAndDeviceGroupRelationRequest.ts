// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserGroupAndDeviceGroupRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The control ID for the face synchronization relationship between user groups and device groups.
   * 
   * This parameter is required.
   * 
   * @example
   * ni1iyxqry0j03plv
   */
  controlId?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolationId
   */
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      isolationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

