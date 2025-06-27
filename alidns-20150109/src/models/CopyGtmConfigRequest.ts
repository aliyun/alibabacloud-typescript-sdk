// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyGtmConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the object that is copied. Only the INSTANCE type is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  copyType?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the source object. Only instance IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-0pp1j84v60d
   */
  sourceId?: string;
  /**
   * @remarks
   * The ID of the target object. Only instance IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-v0h1gaujg06
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      copyType: 'CopyType',
      lang: 'Lang',
      sourceId: 'SourceId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyType: 'string',
      lang: 'string',
      sourceId: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

