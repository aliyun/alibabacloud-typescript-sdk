// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryByNodeIdResponseBody extends $dara.Model {
  /**
   * @example
   * doc
   */
  contentType?: string;
  /**
   * @example
   * 12345678
   */
  createdTime?: number;
  /**
   * @example
   * cdefg
   */
  dentryUuid?: string;
  /**
   * @example
   * alidoc
   */
  extension?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * bcd
   */
  spaceId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      createdTime: 'createdTime',
      dentryUuid: 'dentryUuid',
      extension: 'extension',
      requestId: 'requestId',
      spaceId: 'spaceId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      createdTime: 'number',
      dentryUuid: 'string',
      extension: 'string',
      requestId: 'string',
      spaceId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

