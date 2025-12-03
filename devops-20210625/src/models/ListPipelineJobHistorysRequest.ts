// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineJobHistorysRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEPLOY
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10_ssasasa
   */
  identifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xsaxsa
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      identifier: 'identifier',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      identifier: 'string',
      maxResults: 'number',
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

