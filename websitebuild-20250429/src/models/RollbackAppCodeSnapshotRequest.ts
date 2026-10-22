// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackAppCodeSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 1067072706415168
   */
  siteId?: string;
  /**
   * @remarks
   * The target snapshot version number.
   * 
   * @example
   * 1231
   */
  targetLogicalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      targetLogicalNumber: 'TargetLogicalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'string',
      targetLogicalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

