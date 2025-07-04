// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallRCCloudAssistantResponseBody extends $dara.Model {
  /**
   * @example
   * 842B73C8-5776-4BD9-9872-69C8C46DD7D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

