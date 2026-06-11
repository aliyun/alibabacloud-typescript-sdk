// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. The service may return fewer results than the specified value.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If this parameter is not empty, use it in a subsequent request to get the next page of results.
   * 
   * @example
   * fff3442dac1de7950f44d5afc0c735ebd12e27f603b21d17ec30cb1d5c735b1ba7c4fb3a1c124bce
   */
  nextToken?: string;
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * pipeline-name-1
   */
  pipelineName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pipelineName: 'pipelineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pipelineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

