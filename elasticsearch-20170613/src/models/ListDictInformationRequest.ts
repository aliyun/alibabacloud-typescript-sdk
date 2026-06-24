// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictInformationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the OSS dictionary to be added. Valid values: IK_HOT, IK, SYNONYMS, and ALIWS. Default value: IK.
   * 
   * @example
   * ALIWS
   */
  analyzerType?: string;
  /**
   * @remarks
   * The name of the OSS bucket where the dictionary file is stored.
   * 
   * This parameter is required.
   * 
   * @example
   * search-cloud-test-cn-****
   */
  bucketName?: string;
  /**
   * @remarks
   * The storage path of the dictionary file in the OSS bucket.
   * 
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

