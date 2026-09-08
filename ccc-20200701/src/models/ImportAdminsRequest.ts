// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAdminsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * A list of UIDs for Alibaba Cloud RAM accounts. The value must be a string-encoded JSON array. The array supports up to 20 UIDs.
   * 
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

