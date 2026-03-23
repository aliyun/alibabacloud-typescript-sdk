// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagMetaAssetResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"schemaName": "test"}
   */
  metaEntityAttrs?: { [key: string]: any };
  /**
   * @example
   * META_DATABASE
   */
  metaType?: string;
  static names(): { [key: string]: string } {
    return {
      metaEntityAttrs: 'MetaEntityAttrs',
      metaType: 'MetaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaEntityAttrs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metaType: 'string',
    };
  }

  validate() {
    if(this.metaEntityAttrs) {
      $dara.Model.validateMap(this.metaEntityAttrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetaAssetResponseBody extends $dara.Model {
  data?: ListTagMetaAssetResponseBodyData[];
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTagMetaAssetResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

