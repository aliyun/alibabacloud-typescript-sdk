// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackendModelResponseBody extends $dara.Model {
  /**
   * @example
   * 4be6b110b7aa40b0bf0c83cc00b3bd86
   */
  backendModelId?: string;
  /**
   * @example
   * 64411ECF-FAF7-5E3C-BA7B-E4A1F15A28CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendModelId: 'BackendModelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendModelId: 'string',
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

