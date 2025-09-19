// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * List of file IDs to be processed.
   * > You can call [ListAgentlessMaliciousFiles](~~ListAgentlessMaliciousFiles~~) to get the IDs.
   * > -
   */
  fileIdList?: number[];
  /**
   * @remarks
   * Type of operation:
   * - addWhitelist: Add to whitelist
   * - offWhitelist: Remove from whitelist
   * 
   * @example
   * addWhitelist
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      fileIdList: 'FileIdList',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIdList: { 'type': 'array', 'itemType': 'number' },
      operation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileIdList)) {
      $dara.Model.validateArray(this.fileIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

