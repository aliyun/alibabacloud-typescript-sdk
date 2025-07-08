// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCardResResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

