// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * H8xj9c-398djs9-39ajd9asdjjJ
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the template. Valid values: Private and Public.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * describeinstances
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

