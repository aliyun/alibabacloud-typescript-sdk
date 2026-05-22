// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvRequest extends $dara.Model {
  base64?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      key: 'Key',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'boolean',
      key: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

