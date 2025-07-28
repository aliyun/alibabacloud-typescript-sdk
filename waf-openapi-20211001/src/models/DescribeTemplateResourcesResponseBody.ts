// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResourcesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7BC9373-3960-53B0-8968-2B13454AE18F
   */
  requestId?: string;
  /**
   * @remarks
   * An array of protected objects or protected object groups that are associated to the protection rule template.
   */
  resources?: string[];
  templateId?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
      templateId: 'TemplateId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      templateId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

