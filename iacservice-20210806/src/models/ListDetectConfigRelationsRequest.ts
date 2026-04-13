// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigRelationsRequest extends $dara.Model {
  /**
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @example
   * stack-xxxxx
   */
  targetId?: string;
  /**
   * @example
   * Stack
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      detectConfigId: 'detectConfigId',
      targetId: 'targetId',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectConfigId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

