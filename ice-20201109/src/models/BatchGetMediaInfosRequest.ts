// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information that you want to query about the media assets. By default, only BasicInfo is returned. The following additional information can be queried:
   * 
   * \\- FileInfo
   * 
   * \\- DynamicMetaData
   * 
   * @example
   * FileInfo,DynamicMetaData
   */
  additionType?: string;
  authTimeout?: number;
  /**
   * @remarks
   * The IDs of the media assets that you want to query. Separate the IDs with commas (,).
   * 
   * @example
   * ******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      authTimeout: 'AuthTimeout',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: 'string',
      authTimeout: 'number',
      mediaIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

