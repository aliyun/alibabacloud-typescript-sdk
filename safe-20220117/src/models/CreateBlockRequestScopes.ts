// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateBlockRequestScopesBlockScope } from "./CreateBlockRequestScopesBlockScope";


export class CreateBlockRequestScopes extends $dara.Model {
  blockHarm?: number[];
  blockScope?: CreateBlockRequestScopesBlockScope;
  effectTime?: number[];
  scopeRule?: string;
  changeObjectRegex?: string;
  riskLevels?: number[];
  static names(): { [key: string]: string } {
    return {
      blockHarm: 'BlockHarm',
      blockScope: 'BlockScope',
      effectTime: 'EffectTime',
      scopeRule: 'ScopeRule',
      changeObjectRegex: 'changeObjectRegex',
      riskLevels: 'riskLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHarm: { 'type': 'array', 'itemType': 'number' },
      blockScope: CreateBlockRequestScopesBlockScope,
      effectTime: { 'type': 'array', 'itemType': 'number' },
      scopeRule: 'string',
      changeObjectRegex: 'string',
      riskLevels: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.blockHarm)) {
      $dara.Model.validateArray(this.blockHarm);
    }
    if(this.blockScope && typeof (this.blockScope as any).validate === 'function') {
      (this.blockScope as any).validate();
    }
    if(Array.isArray(this.effectTime)) {
      $dara.Model.validateArray(this.effectTime);
    }
    if(Array.isArray(this.riskLevels)) {
      $dara.Model.validateArray(this.riskLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

