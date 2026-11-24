// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-upoulewerx*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * 
   * - `VUL`: artifact vulnerability scanning.
   * - `SBOM`: artifact content analysis.
   * 
   * Default value: `VUL`.
   * 
   * @example
   * SBOM
   */
  scanType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scanType: 'ScanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scanType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

