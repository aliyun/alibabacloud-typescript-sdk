// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EqualRule } from "./EqualRule";
import { RegexRule } from "./RegexRule";
import { WildcardRule } from "./WildcardRule";


export class RewriteConfig extends $dara.Model {
  equalRules?: EqualRule[];
  regexRules?: RegexRule[];
  wildcardRules?: WildcardRule[];
  static names(): { [key: string]: string } {
    return {
      equalRules: 'equalRules',
      regexRules: 'regexRules',
      wildcardRules: 'wildcardRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equalRules: { 'type': 'array', 'itemType': EqualRule },
      regexRules: { 'type': 'array', 'itemType': RegexRule },
      wildcardRules: { 'type': 'array', 'itemType': WildcardRule },
    };
  }

  validate() {
    if(Array.isArray(this.equalRules)) {
      $dara.Model.validateArray(this.equalRules);
    }
    if(Array.isArray(this.regexRules)) {
      $dara.Model.validateArray(this.regexRules);
    }
    if(Array.isArray(this.wildcardRules)) {
      $dara.Model.validateArray(this.wildcardRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

