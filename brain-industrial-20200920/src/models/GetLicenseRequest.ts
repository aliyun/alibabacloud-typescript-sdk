// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * c31238fcb74e482588a72de90cd7dba3
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

