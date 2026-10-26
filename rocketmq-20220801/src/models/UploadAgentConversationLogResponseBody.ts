// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentConversationLogResponseBody extends $dara.Model {
  /**
   * @example
   * client.log
   */
  fileName?: string;
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e99
   */
  id?: string;
  /**
   * @example
   * client-logs/0198c8a91f4d7f01a3c21e99/client.log
   */
  sandboxPath?: string;
  /**
   * @example
   * 114
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      id: 'id',
      sandboxPath: 'sandboxPath',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'string',
      sandboxPath: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

