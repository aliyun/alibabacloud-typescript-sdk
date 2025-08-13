// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteSampleDataRequest extends $dara.Model {
  /**
   * @remarks
   * Language of the error message returned by the interface. Values: zh: Chinese; en: English. Default is en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * UUID.
   * 
   * @example
   * 89cd3e44cd2f4a529fb020f3bab3ee1c
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      uuids: 'uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

