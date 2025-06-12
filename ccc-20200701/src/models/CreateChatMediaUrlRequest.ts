// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatMediaUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @remarks
   * media id
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  mimeType?: string;
  /**
   * @example
   * 9F766284-F103-4298-8EC5-19F9F9BE5522
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mimeType: 'MimeType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mimeType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

