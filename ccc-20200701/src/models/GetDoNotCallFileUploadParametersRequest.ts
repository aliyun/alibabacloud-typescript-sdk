// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoNotCallFileUploadParametersRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the file containing prohibited outbound call numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * blacklist.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
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

