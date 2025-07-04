// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the index configuration.
   * 
   * @example
   * index_meta_name
   */
  configMetaName?: string;
  /**
   * @remarks
   * The version of the index template.
   * 
   * @example
   * 1.0.0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      configMetaName: 'configMetaName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMetaName: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

