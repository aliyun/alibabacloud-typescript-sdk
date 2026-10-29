// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAdbSecureRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud phone instance IDs. Up to 50 instances are supported.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ADB authentication status.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

