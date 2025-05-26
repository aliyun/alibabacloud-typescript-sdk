// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureRequestSlsInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the data source is a cross-account resource.
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * The name of the cross-account role.
   * 
   * @example
   * yyy
   */
  acrossRole?: string;
  /**
   * @remarks
   * The cross-account UID.
   * 
   * @example
   * xxxx
   */
  acrossUid?: string;
  /**
   * @remarks
   * The SLS project.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * test-store
   */
  store?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      project: 'Project',
      sourceRegionId: 'SourceRegionId',
      store: 'Store',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      acrossRole: 'string',
      acrossUid: 'string',
      project: 'string',
      sourceRegionId: 'string',
      store: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

