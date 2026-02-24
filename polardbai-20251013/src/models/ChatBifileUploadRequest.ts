// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIFileUploadRequest extends $dara.Model {
  authMessage?: string;
  authType?: string;
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
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      fileName: 'FileName',
      instanceName: 'InstanceName',
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      fileName: 'string',
      instanceName: 'string',
      sourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

