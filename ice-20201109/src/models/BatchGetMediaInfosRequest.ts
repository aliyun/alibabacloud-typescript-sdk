// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The types of additional media asset information to return. If this parameter is not specified, only basic information is returned. Valid values are:
   * 
   * -FileInfo
   * 
   * -DynamicMetaData
   * 
   * @example
   * FileInfo,DynamicMetaData
   */
  additionType?: string;
  /**
   * @remarks
   * The authentication timeout, in seconds.
   * 
   * - Minimum value: **1**.
   * 
   * - Maximum value: 86400.
   * 
   * - Default value: 3600.
   * 
   * @example
   * 30
   */
  authTimeout?: number;
  /**
   * @remarks
   * A comma-separated list of media asset IDs to query.
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

