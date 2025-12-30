// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIFileTemplateDownloadRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pattern/config
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

