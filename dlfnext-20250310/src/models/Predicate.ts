// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Transform } from "./Transform";


export class Predicate extends $dara.Model {
  children?: Predicate[];
  function?: string;
  kind?: string;
  literals?: any[];
  transform?: Transform;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      function: 'function',
      kind: 'kind',
      literals: 'literals',
      transform: 'transform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': Predicate },
      function: 'string',
      kind: 'string',
      literals: { 'type': 'array', 'itemType': 'any' },
      transform: Transform,
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.literals)) {
      $dara.Model.validateArray(this.literals);
    }
    if(this.transform && typeof (this.transform as any).validate === 'function') {
      (this.transform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

