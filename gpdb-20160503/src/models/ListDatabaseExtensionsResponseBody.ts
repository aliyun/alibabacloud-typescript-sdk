// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseExtensionsResponseBodyExtensions extends $dara.Model {
  /**
   * @remarks
   * The description of the extension.
   * 
   * @example
   * zhparser
   */
  description?: string;
  /**
   * @remarks
   * The extension name.
   * 
   * @example
   * zhparser
   */
  extensionName?: string;
  /**
   * @remarks
   * The status of the extension.
   * 
   * @example
   * installed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extensionName: 'ExtensionName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extensionName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseExtensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Extension list.
   */
  extensions?: ListDatabaseExtensionsResponseBodyExtensions[];
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: { 'type': 'array', 'itemType': ListDatabaseExtensionsResponseBodyExtensions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

