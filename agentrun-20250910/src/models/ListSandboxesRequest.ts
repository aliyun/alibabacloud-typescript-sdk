// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next set of results. A non-empty value indicates that more data is available.
   * 
   * @example
   * dnLkmeaJc9vHgbzREh2l0J4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * 01KMB33KCB3YRYE9C2AJCW5DQK
   */
  sandboxId?: string;
  /**
   * @remarks
   * Filters the results by status.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * Filters the results by template name.
   * 
   * @example
   * templateName
   */
  templateName?: string;
  /**
   * @remarks
   * Filters the results by template type.
   * 
   * @example
   * TASK
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sandboxId: 'sandboxId',
      status: 'status',
      templateName: 'templateName',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      sandboxId: 'string',
      status: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

