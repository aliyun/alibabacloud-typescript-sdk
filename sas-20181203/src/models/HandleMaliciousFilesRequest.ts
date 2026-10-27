// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the files to be processed.
   * > You can call the [ListAgentlessMaliciousFiles](~~ListAgentlessMaliciousFiles~~) operation to obtain the IDs.
   * > -
   */
  fileIdList?: number[];
  /**
   * @remarks
   * The type of the operation. Valid values:
   * - addWhitelist: Adds the security alerts to the whitelist.
   * - offWhitelist: Removes the security alerts from the whitelist.
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

