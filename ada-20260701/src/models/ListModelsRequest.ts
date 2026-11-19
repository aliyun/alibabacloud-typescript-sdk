// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of models to return per page. Valid values: 1 to 100. Explicitly specify this parameter.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Set to `text` for text sessions. If omitted, all visible models are queried.
   * 
   * @example
   * text
   */
  modelType?: string;
  /**
   * @remarks
   * The pagination token returned from the previous page. Omit this parameter for the first page.
   * 
   * @example
   * next-token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The legacy pagination parameter for compatibility. The page number starts from 1. Use MaxResults and NextToken instead. Do not mix the two sets of pagination parameters.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The legacy pagination parameter for compatibility. The number of entries per page. Valid values: 1 to 100. Use MaxResults and NextToken instead. Do not mix the two sets of pagination parameters.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      modelType: 'ModelType',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      modelType: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

