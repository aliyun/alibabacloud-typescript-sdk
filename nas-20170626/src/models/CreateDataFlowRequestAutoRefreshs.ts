// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The automatic update directory. CPFS registers the data update event in the source storage, and automatically checks whether the source data in the directory is updated and imports the updated data.
   * 
   * This parameter is empty by default. Updated data in the source storage is not automatically imported into the CPFS file system. You must import the updated data by running a manual task.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be an existing directory in the CPFS file system and must be in a fileset where the data flow is enabled.
   * 
   * @example
   * /prefix1/prefix2/
   * 
   * **if can be null:**
   * true
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

