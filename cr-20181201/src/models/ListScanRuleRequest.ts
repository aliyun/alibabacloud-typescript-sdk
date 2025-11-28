// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanRuleRequest extends $dara.Model {
  /**
   * @example
   * cri-upoulewerx*****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
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

