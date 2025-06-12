// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAdminsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["26972543893791****"]
   */
  ramIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramIdList: 'RamIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

