// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ApplyDataFlowAutoRefreshRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The automatic update directory. CPFS automatically checks whether the source data only in the directory is updated and imports the updated data.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * 
   * >  The directory must be an existing directory in the CPFS file system and must be in a fileset where the dataflow is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * /prefix1/prefix2/
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

