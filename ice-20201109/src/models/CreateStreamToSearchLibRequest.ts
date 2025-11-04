// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamToSearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the live stream to be ingested and analyzed.
   * 
   * @example
   * rtmp://xxx
   */
  input?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @remarks
   * The search library.
   * 
   * @example
   * Stream_xxx
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      namespace: 'Namespace',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      namespace: 'string',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

