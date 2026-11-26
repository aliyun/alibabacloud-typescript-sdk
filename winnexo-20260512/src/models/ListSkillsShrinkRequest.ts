// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the operation is executed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The binding status. Valid values: BOUND (bound) and UNBOUND (unbound global skills). Must be specified together with operatingObjectName.
   * 
   * @example
   * BOUND
   */
  bindStatus?: string;
  /**
   * @remarks
   * The filter expression type. Valid values:
   * - SQL: SQL filtering.
   * - TAG: Tag filtering.
   * 
   * @example
   * ALL
   */
  filterType?: string;
  /**
   * @remarks
   * The search keyword. Supports fuzzy search by API name or exact search by API ID.
   * 
   * @example
   * Sample keyword
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the digital employee. Used to calculate the CodeAgent allowedSkills whitelist based on binding relationships.
   * 
   * @example
   * 11111
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. Used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. Used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tag filtering parameter.
   * 
   * @example
   * ["[{\\\"value\\\":\\\"dataworks#0#1#34167#432313#T3_23030136354#86969667366\\\",\\\"key\\\":\\\"dataworksTag\\\"}]"]
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      bindStatus: 'bindStatus',
      filterType: 'filterType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      page: 'page',
      pageSize: 'pageSize',
      tagsShrink: 'tags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      bindStatus: 'string',
      filterType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      page: 'number',
      pageSize: 'number',
      tagsShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

