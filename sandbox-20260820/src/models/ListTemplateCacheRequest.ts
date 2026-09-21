// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateCacheRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * cae5f900-8b1d-4c0e-9c2a-1a2b3c4d5e6f
   */
  nextToken?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  /**
   * @example
   * us7dxqaezw5uu7aa2cm5
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

