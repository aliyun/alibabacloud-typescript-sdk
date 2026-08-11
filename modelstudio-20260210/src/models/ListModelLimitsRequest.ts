// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelLimitsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 0 to 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The model for exact match.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The model name for fuzzy match.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-8af73c50f5596193
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      model: 'model',
      name: 'name',
      nextToken: 'nextToken',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      model: 'string',
      name: 'string',
      nextToken: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

