// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLlmProxyConfigForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * The capability type. Valid values: llm, image, and video.
   * 
   * @example
   * understand
   */
  capability?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      capability: 'Capability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      capability: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

