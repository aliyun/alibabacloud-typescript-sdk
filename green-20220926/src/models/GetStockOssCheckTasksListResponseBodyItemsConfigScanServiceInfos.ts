// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos extends $dara.Model {
  /**
   * @example
   * baselineCheck
   */
  copyFrom?: string;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @example
   * baselineCheck_01
   */
  serviceCode?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      copyFrom: 'CopyFrom',
      isCopy: 'IsCopy',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyFrom: 'string',
      isCopy: 'boolean',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

