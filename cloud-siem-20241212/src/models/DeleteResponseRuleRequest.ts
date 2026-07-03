// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResponseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If you do not specify this parameter, the service returns the first page of results.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the data management center for threat analysis. This must be the region where your assets are located. Valid values:
   * 
   * - `cn-hangzhou`: for assets in the Chinese mainland or Hong Kong (China).
   * 
   * - `ap-southeast-1`: for assets in international regions.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the automatic response rule to delete.
   * 
   * @example
   * 403235
   */
  responseRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      responseRuleId: 'ResponseRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      responseRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

