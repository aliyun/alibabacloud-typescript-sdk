// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList } from "./GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList";


export class GetDataExportPreCheckDetailResponseBodyPreCheckResult extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip verification. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The list of pre-check details.
   */
  preCheckDetailList?: GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList;
  static names(): { [key: string]: string } {
    return {
      ignoreAffectRows: 'IgnoreAffectRows',
      preCheckDetailList: 'PreCheckDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreAffectRows: 'boolean',
      preCheckDetailList: GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList,
    };
  }

  validate() {
    if(this.preCheckDetailList && typeof (this.preCheckDetailList as any).validate === 'function') {
      (this.preCheckDetailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

