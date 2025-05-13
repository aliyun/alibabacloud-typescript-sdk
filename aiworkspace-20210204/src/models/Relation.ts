// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageRelation } from "./LineageRelation";


export class Relation extends $dara.Model {
  errMsg?: string;
  lineageRelation?: LineageRelation;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      lineageRelation: 'LineageRelation',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      lineageRelation: LineageRelation,
      result: 'boolean',
    };
  }

  validate() {
    if(this.lineageRelation && typeof (this.lineageRelation as any).validate === 'function') {
      (this.lineageRelation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

