// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPolarClawSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The search keyword. If this parameter is not specified, popular or recommended results are returned.
   * 
   * @example
   * rds
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      limit: 'Limit',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      limit: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

