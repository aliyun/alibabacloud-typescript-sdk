// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigMapResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   * 
   * @example
   * 1
   */
  configMapId?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

