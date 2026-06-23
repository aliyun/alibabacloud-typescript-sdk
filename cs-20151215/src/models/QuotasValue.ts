// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotasValue extends $dara.Model {
  /**
   * @remarks
   * The quota value. To request a quota increase beyond the current value, submit a request on the [Quota Center](https://quotas.console.aliyun.com/products/csk/quotas) page.
   * 
   * @example
   * 1
   */
  quota?: string;
  /**
   * @remarks
   * The quota code.
   * 
   * @example
   * q_Kubernetes_Cluster
   */
  operationCode?: string;
  /**
   * @remarks
   * Indicates whether the quota is adjustable.
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * Cluster
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'quota',
      operationCode: 'operation_code',
      adjustable: 'adjustable',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      operationCode: 'string',
      adjustable: 'boolean',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

