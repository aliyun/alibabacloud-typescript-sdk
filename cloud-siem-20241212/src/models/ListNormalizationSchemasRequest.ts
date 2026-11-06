// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If it is not provided, the service returns a 400 error "The specified Lang can not be empty.". Explicitly specify the language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return in the current request.
   * 
   * @example
   * 50
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Leave this parameter empty for the first request or when no more results are available. For subsequent requests, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the normalization rule category.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The filter for the field source. Valid values: normalized and native.
   * 
   * @example
   * normalized
   */
  normalizationFieldSource?: string;
  /**
   * @remarks
   * The type of the normalization schema. Valid values:
   * - log: Log.
   * - entity: Entity.
   * 
   * @example
   * entity
   */
  normalizationSchemaType?: string;
  /**
   * @remarks
   * The ID of the security domain.
   * 
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldSource: 'NormalizationFieldSource',
      normalizationSchemaType: 'NormalizationSchemaType',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      normalizationCategoryId: 'string',
      normalizationFieldSource: 'string',
      normalizationSchemaType: 'string',
      normalizationSecurityDomainId: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

