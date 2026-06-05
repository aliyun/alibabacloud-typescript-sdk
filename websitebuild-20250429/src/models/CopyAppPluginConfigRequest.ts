// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyAppPluginConfigRequest extends $dara.Model {
  /**
   * @example
   * 31104757
   */
  sourceBizId?: string;
  /**
   * @example
   * 31104758
   */
  targetBizId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceBizId: 'SourceBizId',
      targetBizId: 'TargetBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceBizId: 'string',
      targetBizId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

