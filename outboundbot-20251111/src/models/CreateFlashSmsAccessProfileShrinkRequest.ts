// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlashSmsAccessProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access configuration.
   */
  accessProfileShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The provider ID. Valid values:
   * - Uincall: Beijing Youyin Communication Co., Ltd.
   * - ChuangLan: Beijing Chuanglan Yunzhi Information Co., Ltd.
   * - ChinaMobile: China Mobile.
   * - ShangHaiTianNan: Shanghai Tiannan.
   * - HeDao: Galexes.
   * - DySms: Alibaba Communication.
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileShrink: 'AccessProfile',
      instanceId: 'InstanceId',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileShrink: 'string',
      instanceId: 'string',
      providerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

