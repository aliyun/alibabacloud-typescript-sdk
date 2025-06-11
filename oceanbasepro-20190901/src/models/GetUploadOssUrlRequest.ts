// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadOssUrlRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  effectiveTimeMinutes?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CREATE_PROJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTimeMinutes: 'EffectiveTimeMinutes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTimeMinutes: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

