// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class WorkspaceSpec extends $dara.Model {
  code?: string;
  codeType?: string;
  isGuaranteedValid?: boolean;
  isOverSoldValid?: boolean;
  reason?: string;
  spec?: ResourceAmount;
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeType: 'CodeType',
      isGuaranteedValid: 'IsGuaranteedValid',
      isOverSoldValid: 'IsOverSoldValid',
      reason: 'Reason',
      spec: 'Spec',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeType: 'string',
      isGuaranteedValid: 'boolean',
      isOverSoldValid: 'boolean',
      reason: 'string',
      spec: ResourceAmount,
      specName: 'string',
    };
  }

  validate() {
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

