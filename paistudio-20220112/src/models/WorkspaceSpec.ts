// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class WorkspaceSpec extends $dara.Model {
  /**
   * @remarks
   * Invalidity reason code when using guaranteed resources is invalid
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * Type of invalidity reason when using guaranteed resources is invalid
   * 
   * @example
   * ""
   */
  codeType?: string;
  /**
   * @remarks
   * Indicates whether the use of guaranteed resources is valid.
   * 
   * @example
   * true
   */
  isGuaranteedValid?: boolean;
  /**
   * @remarks
   * Indicates whether the use of oversold resources is valid.
   * 
   * @example
   * true
   */
  isOverSoldValid?: boolean;
  /**
   * @remarks
   * Invalidity reason content when using guaranteed resources is invalid
   * 
   * @example
   * ""
   */
  reason?: string;
  /**
   * @remarks
   * Specification resource information
   */
  spec?: ResourceAmount;
  /**
   * @remarks
   * Template Name
   * 
   * @example
   * spec_test
   */
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

