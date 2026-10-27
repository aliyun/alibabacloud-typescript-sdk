// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotasValue extends $dara.Model {
  /**
   * @remarks
   * The quota value. If the quota is exceeded, [submit an application in Quota Center](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
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
   * Indicates whether the quota can be adjusted.
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

