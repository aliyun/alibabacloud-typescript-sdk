// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProvidersRequest extends $dara.Model {
  /**
   * @example
   * aa
   */
  modelName?: string;
  /**
   * @example
   * pop
   */
  modelType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * Aliyun
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      modelType: 'modelType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

