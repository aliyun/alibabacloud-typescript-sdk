// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The region supported by the anti-ransomware feature. You can call [DescribeSupportRegion](~~DescribeSupportRegion~~) to query the regions supported by the anti-ransomware feature.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  supportRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      supportRegionId: 'SupportRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

