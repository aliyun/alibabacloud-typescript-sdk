// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebSearchRequest extends $dara.Model {
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      query: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

