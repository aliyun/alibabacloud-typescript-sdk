// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAdvancedMonitorStateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the DPI feature. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-****
   */
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      regionId: 'RegionId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      regionId: 'string',
      sagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

