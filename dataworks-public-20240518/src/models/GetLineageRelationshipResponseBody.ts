// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageRelationship } from "./LineageRelationship";


export class GetLineageRelationshipResponseBody extends $dara.Model {
  lineageRelationship?: LineageRelationship;
  /**
   * @example
   * 58D5334A-B013-430E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineageRelationship: 'LineageRelationship',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineageRelationship: LineageRelationship,
      requestId: 'string',
    };
  }

  validate() {
    if(this.lineageRelationship && typeof (this.lineageRelationship as any).validate === 'function') {
      (this.lineageRelationship as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

