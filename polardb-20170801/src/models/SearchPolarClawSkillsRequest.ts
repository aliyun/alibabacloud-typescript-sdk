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
   * Specifies whether to perform an exact search by matching the slug.
   * 
   * @example
   * true
   */
  exact?: boolean;
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
   * The search keyword. If this parameter is not specified, popular or recommended skills are returned.
   * 
   * @example
   * rds
   */
  query?: string;
  /**
   * @remarks
   * The source of the skill. Valid values: clawhub and polarhub.
   * 
   * @example
   * polarhub
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      exact: 'Exact',
      limit: 'Limit',
      query: 'Query',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      exact: 'boolean',
      limit: 'number',
      query: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

