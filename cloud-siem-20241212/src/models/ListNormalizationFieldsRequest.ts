// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationFieldsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * This parameter is required and cannot be omitted.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
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
   * The field name.
   * 
   * @example
   * category
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether a next query token exists. Leave this parameter empty for the first query or when no more results are available. If a next page exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The field source.
   * 
   * @example
   * native
   */
  normalizationFieldSource?: string;
  /**
   * @remarks
   * The schema type.
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center region based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets reside in the Chinese mainland.
   * - ap-southeast-1: The assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to when viewing as another member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      normalizationFieldSource: 'NormalizationFieldSource',
      normalizationSchemaType: 'NormalizationSchemaType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      normalizationFieldSource: 'string',
      normalizationSchemaType: 'string',
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

