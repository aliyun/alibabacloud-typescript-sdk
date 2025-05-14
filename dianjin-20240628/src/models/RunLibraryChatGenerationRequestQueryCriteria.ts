// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLibraryChatGenerationRequestQueryCriteriaAnd } from "./RunLibraryChatGenerationRequestQueryCriteriaAnd";
import { RunLibraryChatGenerationRequestQueryCriteriaOr } from "./RunLibraryChatGenerationRequestQueryCriteriaOr";


export class RunLibraryChatGenerationRequestQueryCriteria extends $dara.Model {
  and?: RunLibraryChatGenerationRequestQueryCriteriaAnd[];
  or?: RunLibraryChatGenerationRequestQueryCriteriaOr[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      or: 'or',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': RunLibraryChatGenerationRequestQueryCriteriaAnd },
      or: { 'type': 'array', 'itemType': RunLibraryChatGenerationRequestQueryCriteriaOr },
    };
  }

  validate() {
    if(Array.isArray(this.and)) {
      $dara.Model.validateArray(this.and);
    }
    if(Array.isArray(this.or)) {
      $dara.Model.validateArray(this.or);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

