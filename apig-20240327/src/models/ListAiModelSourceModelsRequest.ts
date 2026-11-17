// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiModelSourceModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI gateway instance to which the resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The keyword used to query resources by matching their names or identifiers.
   * 
   * @example
   * beta
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. Valid values: 1 to 100. This parameter is required. Token-based pagination does not use pageNumber or pageSize.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the model source. Use the modelSourceId returned by CreateAiModelSource.
   * 
   * @example
   * ms-d00000000000000000000
   */
  modelSourceId?: string;
  /**
   * @remarks
   * The pagination token returned from the previous page. Omit this parameter for the first page. The value is empty or omitted for the last page.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      maxResults: 'maxResults',
      modelSourceId: 'modelSourceId',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      maxResults: 'number',
      modelSourceId: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

