// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDcdnWafPolicyDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names that you want to bind to the protection policy. You can specify up to 50 domain names. Separate multiple domain names with commas (,).
   * 
   * > You can configure either **BindDomains** or **UnbindDomains**.
   * 
   * @example
   * example.com,example2.com
   */
  bindDomains?: string;
  /**
   * @remarks
   * The association method. Valid values:
   * 
   * *   0: replace.
   * *   1: add.
   * *   Default value: 0.
   * 
   * > 
   * 
   * *   This parameter takes effect only when you specify **BindDomains**. If you have associated a domain name indicated by **BindDomains** with the default protection policy, the `Policy.DefaultAndCustom.BindToSameDomain` error is returned.
   * 
   * *   You can only replace accelerated domain names that are bound to the default protection policy.
   * 
   * @example
   * 0
   */
  method?: number;
  /**
   * @remarks
   * The ID of the protection policy. You can specify only one ID in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  policyId?: number;
  /**
   * @remarks
   * The domain names that you want to unbind from the protection policy. You can specify up to 50 domain names. Separate multiple domain names with commas (,).
   * 
   * > You can configure either **BindDomains** or **UnbindDomains**.
   * 
   * @example
   * example3.com
   */
  unbindDomains?: string;
  static names(): { [key: string]: string } {
    return {
      bindDomains: 'BindDomains',
      method: 'Method',
      policyId: 'PolicyId',
      unbindDomains: 'UnbindDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindDomains: 'string',
      method: 'number',
      policyId: 'number',
      unbindDomains: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

