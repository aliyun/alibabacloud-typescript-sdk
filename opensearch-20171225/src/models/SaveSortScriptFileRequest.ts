// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSortScriptFileRequest extends $dara.Model {
  /**
   * @remarks
   * The script content that is encoded in the Base64 format.
   * 
   * @example
   * 4769#0: *28194492991 a client request body is buffered to a temporary file /usr/local/webserver/openresty/nginx/client_body_temp/0000624474,
   */
  content?: string;
  /**
   * @remarks
   * The version number of the script content.
   * 
   * @example
   * 2022-12-01
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

