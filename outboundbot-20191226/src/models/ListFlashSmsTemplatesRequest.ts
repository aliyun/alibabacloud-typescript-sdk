// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the flash SMS configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * fe542524-9585-4cc7-be54-c8782ed7f60e
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the flash SMS provider.
   * 
   * - Uincall: Beijing Uincall Communication Co., Ltd.
   * 
   * - ShangHaiTianNan: Shanghai Tiannan
   * 
   * - HeDao: Galacos
   * 
   * This parameter is required.
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
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

