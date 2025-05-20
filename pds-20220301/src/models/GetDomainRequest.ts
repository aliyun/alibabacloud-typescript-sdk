// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain.
   * 
   * This parameter is required.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  fields?: string;
  /**
   * @remarks
   * Specifies whether to return the used quota of the domain. Default value: false. If the quota of the domain is greater than 0 and you set this parameter to true, the used quota of the domain is returned.
   * 
   * @example
   * true
   */
  getQuotaUsed?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      fields: 'fields',
      getQuotaUsed: 'get_quota_used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      fields: 'string',
      getQuotaUsed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

