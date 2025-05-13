// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictInformationRequest extends $dara.Model {
  /**
   * @example
   * ALIWS
   */
  analyzerType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * search-cloud-test-cn-****
   */
  bucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss/dic_0.dic
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      analyzerType: 'analyzerType',
      bucketName: 'bucketName',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzerType: 'string',
      bucketName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

