// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpsPrivateAssocRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ngw-c5vhmjdfp5t****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

