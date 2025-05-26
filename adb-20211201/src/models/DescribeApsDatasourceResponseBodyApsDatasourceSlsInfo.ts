// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data source is a cross-account resource. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * test
   */
  acrossRole?: string;
  /**
   * @remarks
   * The cross-account UID.
   * 
   * @example
   * 123456
   */
  acrossUid?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * ***
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * ***
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

