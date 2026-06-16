// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @example
   * my-pipeline
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

