// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The model connection ID used to filter models.
   * 
   * @example
   * mc-1
   */
  connectionId?: string;
  /**
   * @remarks
   * The number of results per page. Valid values: 0 to 100. If this parameter is not set or set to 0, the default value 10 is used.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The upstream model name.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The pagination token. Pass the token returned from the previous query. An empty response indicates that no more pages are available.
   * 
   * @example
   * bW9kZWwtbWFuYWdlbWVudC1vZmZzZXQ6bW9kZWw6MTA
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'connectionId',
      maxResults: 'maxResults',
      modelName: 'modelName',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'string',
      maxResults: 'number',
      modelName: 'string',
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

