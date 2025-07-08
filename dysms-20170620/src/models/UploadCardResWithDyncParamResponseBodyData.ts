// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCardResWithDyncParamResponseBodyData extends $dara.Model {
  /**
   * @example
   * 25
   */
  resourceId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

