// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIFileUploadRequest extends $dara.Model {
  /**
   * @example
   * pattern_test.csv
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

