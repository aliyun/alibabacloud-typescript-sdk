// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLocalDefaultRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * 
   * - **Tencent**: Tencent Cloud
   * - **HUAWEICLOUD**: Huawei Cloud
   * - **Azure**: Azure
   * - **AWS**: AWS.
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

