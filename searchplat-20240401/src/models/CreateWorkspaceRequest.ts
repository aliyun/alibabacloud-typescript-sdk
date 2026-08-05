// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequestQuota extends $dara.Model {
  /**
   * @remarks
   * Compute resource (unit: LCU)
   * 
   * @example
   * 0
   */
  computeResource?: number;
  /**
   * @remarks
   * Storage capacity (unit: GB)
   * 
   * @example
   * 0
   */
  docSize?: number;
  /**
   * @remarks
   * Specification
   * - rag.share.common
   * 
   * @example
   * rag.share.common
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Billing type
   * - POSTPAY: Pay-as-you-go
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Engine type
   * - rag
   * 
   * @example
   * rag
   */
  engineType?: string;
  /**
   * @remarks
   * Workspace name
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * Quota
   */
  quota?: CreateWorkspaceRequestQuota;
  /**
   * @remarks
   * Type
   * - standard
   * 
   * @example
   * standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      engineType: 'engineType',
      name: 'name',
      quota: 'quota',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      engineType: 'string',
      name: 'string',
      quota: CreateWorkspaceRequestQuota,
      type: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

