// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPolarClawSkillsResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * RDS Copilot
   */
  displayName?: string;
  /**
   * @remarks
   * The relevance score.
   * 
   * @example
   * 0.95
   */
  score?: number;
  /**
   * @remarks
   * The skill identifier.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  slug?: string;
  /**
   * @remarks
   * The brief description.
   * 
   * @example
   * A copilot for RDS
   */
  summary?: string;
  /**
   * @remarks
   * The UNIX timestamp of the last update, in seconds.
   * 
   * @example
   * 1716000000
   */
  updatedAt?: number;
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 1.2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      score: 'Score',
      slug: 'Slug',
      summary: 'Summary',
      updatedAt: 'UpdatedAt',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      score: 'number',
      slug: 'string',
      summary: 'string',
      updatedAt: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPolarClawSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The list of search results.
   */
  results?: SearchPolarClawSkillsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': SearchPolarClawSkillsResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

