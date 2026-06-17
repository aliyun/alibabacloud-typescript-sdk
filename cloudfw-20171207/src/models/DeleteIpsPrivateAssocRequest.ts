// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpsPrivateAssocRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
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

