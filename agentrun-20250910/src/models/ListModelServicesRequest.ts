// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelServicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * system
   */
  modelType?: string;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Aliyun
   */
  provider?: string;
  /**
   * @example
   * providerType
   */
  providerType?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'modelType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
      providerType: 'providerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      providerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

