// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterLineageRelationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The structure whose lineage you want to register to DataWorks.
   * 
   * This parameter is required.
   */
  lineageRelationRegisterVOShrink?: string;
  static names(): { [key: string]: string } {
    return {
      lineageRelationRegisterVOShrink: 'LineageRelationRegisterVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineageRelationRegisterVOShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

