// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageRelationRegisterVO } from "./LineageRelationRegisterVo";


export class RegisterLineageRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The structure whose lineage you want to register to DataWorks.
   * 
   * This parameter is required.
   */
  lineageRelationRegisterVO?: LineageRelationRegisterVO;
  static names(): { [key: string]: string } {
    return {
      lineageRelationRegisterVO: 'LineageRelationRegisterVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineageRelationRegisterVO: LineageRelationRegisterVO,
    };
  }

  validate() {
    if(this.lineageRelationRegisterVO && typeof (this.lineageRelationRegisterVO as any).validate === 'function') {
      (this.lineageRelationRegisterVO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

